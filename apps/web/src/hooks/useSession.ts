import { queryOptions } from "@tanstack/react-query";
import { fetchUser } from "@/routes/profile";

export const sessionQueryOptions = queryOptions({
  queryKey: ["session"],
  queryFn: () => fetchUser(),
  staleTime: 1000 * 60 * 5, // 5 minutes: check server only if older than this
  gcTime: 1000 * 60 * 60, // Keep in memory for 1 hour
});
