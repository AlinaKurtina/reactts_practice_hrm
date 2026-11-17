import CounterSpan from "@/components/common/CounterSpan";
import ContentsCard from "./ContentsCard/ContentsCard";
import Wrapper from "@/components/common/Wrapper";
import { useContentsData } from "@/hooks/useContentsData";
import React from "react";
import type { possibleCategories } from "@/types";

function ContentsList({ category }: { category: possibleCategories }) {
  const { data, isLoading, error } = useContentsData(category);
  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error placeholder</span>;
  return (
    <div className="flex flex-col">
      <CounterSpan count={data?.length} counted={category} />
      <Wrapper className="flex-col overflow-y-scroll max-h-100 scrollbar-thin gap-3.5 max-w-full">
        {data?.map((cnt) => (
          <React.Fragment key={cnt.id}>
            <ContentsCard
              title={cnt.title}
              category={cnt.category}
              type={cnt.type}
              passedEducation={cnt.passedEducation}
              numberOfStudents={cnt.numberOfStudents}
            />
          </React.Fragment>
        ))}
      </Wrapper>
    </div>
  );
}

export default ContentsList;
