#include <map>
#include <shared_mutex>
#include <optional>

template <typename Key, typename Value>
class ThreadSafeMap
{
private:
    std::map<Key, Value> map_;

public:
    mutable std::shared_mutex mutex_;
    ThreadSafeMap() = default;
    ~ThreadSafeMap() = default;

    // Disable copy and assignment
    ThreadSafeMap(const ThreadSafeMap &) = delete;
    ThreadSafeMap &operator=(const ThreadSafeMap &) = delete;

    //
    // --- Moves ---
    //

    // Move-constructor
    ThreadSafeMap(ThreadSafeMap &&other) noexcept
    {
        // lock only the other�s mutex while we steal its data
        std::unique_lock lock(other.mutex_);
        map_ = std::move(other.map_);
    }

    // Move-assignment
    ThreadSafeMap &operator=(ThreadSafeMap &&other) noexcept
    {
        if (this != &other)
        {
            // lock both mutexes without deadlock
            std::scoped_lock locks(mutex_, other.mutex_);
            map_ = std::move(other.map_);
        }
        return *this;
    }

    template <typename Fn>
    void for_each_read(Fn f) const
    {
        std::shared_lock lock(mutex_);
        for (auto const &[k, v] : map_)
            f(k, v); // v is a const std::shared_ptr<T>&
    }

    // Insert or update
    void insert_or_assign(const Key &key, const Value &value, bool lockless = false)
    {
        if (!lockless)
        {
            std::unique_lock lock(mutex_);
            map_[key] = value;
            return;
        }

        map_[key] = value;
    }

    // Erase by key
    bool erase(const Key &key)
    {
        std::unique_lock lock(mutex_);
        return map_.erase(key) > 0;
    }

    // Find (returns optional)
    std::optional<Value> find(const Key &key, bool lockless = false) const
    {
        if (!lockless)
        {
            std::shared_lock lock(mutex_);
            auto it = map_.find(key);
            if (it != map_.end())
            {
                return it->second;
            }
            return std::nullopt;
        }

        auto it = map_.find(key);
        if (it != map_.end())
        {
            return it->second;
        }
        return std::nullopt;
    }

    // Check if key exists
    bool contains(const Key &key) const
    {
        std::shared_lock lock(mutex_);
        return map_.find(key) != map_.end();
    }

    // Get size
    size_t size() const
    {
        std::shared_lock lock(mutex_);
        return map_.size();
    }

    // Clear map
    void clear()
    {
        std::unique_lock lock(mutex_);
        map_.clear();
    }

    // Access to underlying map (read-only copy)
    std::map<Key, Value> snapshot() const
    {
        std::shared_lock lock(mutex_);
        return map_;
    }
};