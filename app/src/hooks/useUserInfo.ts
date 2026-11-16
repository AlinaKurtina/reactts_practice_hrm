import fetchUserData from "@/api/user";
import { useQuery } from "@tanstack/react-query";

const userKeys = {
  all: ["users"] as const,
  detail: (id: string) => [...userKeys.all, id] as const,
};

function useUserData(id: string) {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => fetchUserData(id),
    enabled: !!id
  });
}

export { useUserData };
