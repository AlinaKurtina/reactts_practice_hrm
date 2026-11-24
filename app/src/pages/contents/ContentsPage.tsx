import ContentsList from "./components/ContentsList";
import Wrapper from "@/components/common/Wrapper";
import { Tabs, TabsList } from "@/components/ui/tabs";
import FilteredSearch from "@/components/common/FilteredSearch";
import { useEffect, useState } from "react";
import CustomTab from "./components/CustomTab";
import type { possibleCategories } from "@/types";
import { capitalize } from "@/lib/utils";
import { useContentsData } from "@/hooks/queries/useContentsData";
import CounterSpan from "@/components/common/CounterSpan";
import { useContentsFiltersStore } from "@/stores/useContentsFiltersStore";

const CATEGORIES: possibleCategories[] = ["courses", "lectures", "quizzes"];

function ContentsPage() {
  const [currentCategory, setCurrentCategory] = useState<possibleCategories>("courses");
  const [selectValue, setSelectValue] = useState<string | null>(null);
  const [appliedFilter, setAppliedFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { setContentsAuthors, allAuthors } = useContentsFiltersStore();

  const { data, isLoading, error } = useContentsData({
    filter: "author",
    filterValue: appliedFilter,
    category: currentCategory,
  });

  const filteredData = data?.filter((cnt) =>
    cnt.title.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  useEffect(() => {
    if (data && !appliedFilter) {
      setContentsAuthors([...new Set(data.map((cnt) => cnt.author))]);
    }
  }, [data, setContentsAuthors, appliedFilter]);

  return (
    <>
      <Wrapper className="flex-col gap-5 w-full">
        <Tabs defaultValue="courses" className="py-2 border-b p-0 pt-2.5">
          <TabsList variant="line" className="p-0">
            {CATEGORIES.map((cat, i) => (
              <CustomTab
                key={i}
                value={capitalize(cat)}
                setFn={() => {
                  setCurrentCategory(cat);
                  setSearchQuery("");
                }}
              />
            ))}
          </TabsList>
        </Tabs>
        <FilteredSearch
          key={currentCategory}
          placeholder={`Search for ${currentCategory}...`}
          selectionPlaceholder="Filter by author"
          onSearch={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchQuery(e.currentTarget.value)
          }
          selectionData={allAuthors}
          onSelect={(value: string) => setSelectValue(value)}
          currentSelectValue={selectValue}
          onApply={() => setAppliedFilter(selectValue)}
          onReset={() => {
            setSelectValue(null);
            setAppliedFilter(null);
          }}
        />
        <Wrapper className="flex-col">
          <CounterSpan
            count={filteredData?.length}
            counted={currentCategory}
            isLoading={isLoading}
          />
          <ContentsList data={filteredData} isLoading={isLoading} isError={error} />
        </Wrapper>
      </Wrapper>
    </>
  );
}

export default ContentsPage;
