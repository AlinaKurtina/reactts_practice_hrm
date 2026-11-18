import { useQuery } from "@tanstack/react-query";
import { fetchContentsData } from "@/api/contents";
import type { possibleCategories } from "@/types";

const contentsKeys = {
  courses: ["courses"] as const,
  lectures: ["lectures"] as const,
  quizzes: ["quizzes"] as const,
};

function useContentsData(category: possibleCategories) {
  return useQuery({
    queryKey: contentsKeys[category],
    queryFn: () => fetchContentsData(category),
    enabled: !!category,
  });
}

export { useContentsData };