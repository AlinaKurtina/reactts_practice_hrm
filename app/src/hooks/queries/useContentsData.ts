import { useQuery } from "@tanstack/react-query";
import { filterContentsData } from "@/api/contents";
import type { ContentsFilters, possibleCategories } from "@/types";

const contentsKeys = {
  all: ["contents"] as const,
  lists: () => [contentsKeys.all, "list"] as const,
  byCategory: (category: possibleCategories) => [contentsKeys.lists(), category] as const,
  list: (category: possibleCategories, filter?: string | null, filterValue?: string | null) =>
    [
      ...contentsKeys.byCategory(category),
      { filter: filter ?? null, filterValue: filterValue ?? null },
    ] as const,
};

function useContentsData({ filter, filterValue, category }: ContentsFilters) {
  return useQuery({
    queryKey: contentsKeys.list(category, filter, filterValue),
    queryFn: () => filterContentsData({ filter, filterValue, category }),
  });
}

export { useContentsData };
