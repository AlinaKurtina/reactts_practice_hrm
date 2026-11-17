import CounterSpan from "@/components/common/CounterSpan";
import ContentsCard from "./ContentsCard/ContentsCard";
import Wrapper from "@/components/common/Wrapper";
import React from "react";
import type { ContentsData, possibleCategories } from "@/types";

interface Props {
  data: ContentsData[] | undefined;
  category: possibleCategories;
  isLoading: boolean;
  isError: Error | null;
}

function ContentsList({ data, category, isLoading, isError }: Props) {

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error placeholder</span>;

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
