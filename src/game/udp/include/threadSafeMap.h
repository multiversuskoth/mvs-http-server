#include <map>
#include <shared_mutex>
#include <optional>

template <typename Key, typename Value>
class ThreadSafeMap {
private:
    std::map<Key, Value> map_;
    mutable std::shared_mutex mutex_;

public:
    ThreadSafeMap() = default;
    ~ThreadSafeMap() = default;

    // Disable copy and assignment
    ThreadSafeMap(const ThreadSafeMap&) = delete;
    ThreadSafeMap& operator=(const ThreadSafeMap&) = delete;

    // Insert or update
    void insert_or_assign(const Key& key, const Value& value) {
        std::unique_lock lock(mutex_);
        map_[key] = value;
    }

    // Erase by key
    bool erase(const Key& key) {
        std::unique_lock lock(mutex_);
        return map_.erase(key) > 0;
    }

    // Find (returns optional)
    std::optional<Value> find(const Key& key) const {
        std::shared_lock lock(mutex_);
        auto it = map_.find(key);
        if (it != map_.end()) {
            return it->second;
        }
        return std::nullopt;
    }

    // Check if key exists
    bool contains(const Key& key) const {
        std::shared_lock lock(mutex_);
        return map_.find(key) != map_.end();
    }

    // Get size
    size_t size() const {
        std::shared_lock lock(mutex_);
        return map_.size();
    }

    // Clear map
    void clear() {
        std::unique_lock lock(mutex_);
        map_.clear();
    }

    // Access to underlying map (read-only copy)
    std::map<Key, Value> snapshot() const {
        std::shared_lock lock(mutex_);
        return map_;
    }
};
