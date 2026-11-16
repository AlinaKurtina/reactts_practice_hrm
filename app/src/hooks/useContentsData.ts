import { useQuery } from "@tanstack/react-query";
import { fetchContentsData } from "@/api/contents";

const contentsKeys = {
  all: ["contents"],
} as const;

function useContentsData() {
  return useQuery({
    queryKey: contentsKeys.all,
    queryFn: fetchContentsData,
  });
}

export { useContentsData };