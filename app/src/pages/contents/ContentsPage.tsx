import ContentsList from "./components/ContentsList";
import Wrapper from "@/components/common/Wrapper";
import { Tabs, TabsList } from "@/components/ui/tabs";
import FilteredSearch from "@/components/common/FilteredSearch";
import { useState, type SetStateAction } from "react";
import CustomTab from "./components/CustomTab";
import type { possibleCategories } from "@/types";
import { capitalize } from "@/lib/utils";
import { useContentsData } from "@/hooks/useContentsData";

const CATEGORIES = ["courses", "lectures", "quizzes"];

function ContentsPage() {
  const [currentCategory, setCurrentCategory] = useState<possibleCategories>("courses");
  const { data, isLoading, error } = useContentsData(currentCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredData = data?.filter((cnt) => cnt.title.toLowerCase().includes(searchQuery.trim().toLowerCase()));

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.currentTarget.value);
  }

  return (
    <>
      <Wrapper className="flex-col gap-5 w-full">
        <Tabs defaultValue="courses" className="py-2 border-b p-0 pt-2.5">
          <TabsList variant="line" className="p-0">
            {CATEGORIES.map((cat, i) => (
              <CustomTab
                key={i}
                value={capitalize(cat)}
                setFn={() => setCurrentCategory(cat as SetStateAction<possibleCategories>)}
              />
            ))}
          </TabsList>
        </Tabs>
        <FilteredSearch
          searchPlaceholder={`Search for ${currentCategory}...`}
          selectionPlaceholder="Author: Alina Kurtsina"
          onSearch={handleSearch}
        />
        <ContentsList
          data={filteredData}
          category={currentCategory}
          isLoading={isLoading}
          isError={error}
        />
      </Wrapper>
    </>
  );
}

export default ContentsPage;
