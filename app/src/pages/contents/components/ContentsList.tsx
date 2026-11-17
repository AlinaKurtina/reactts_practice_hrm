import ContentsCard from "./ContentsCard/ContentsCard";
import Wrapper from "@/components/common/Wrapper";
import React from "react";
import type { ContentsData } from "@/types";
import ContentsCardSkeleton from "./ContentsCardSkeleton";

interface Props {
  data: ContentsData[] | undefined;
  isLoading: boolean;
  isError: Error | null;
}

function ContentsList({ data, isLoading, isError }: Props) {

  if (isLoading) return <ContentsCardSkeleton />;
  if (isError) return <span>Error placeholder</span>;

  return (
    <div className="flex flex-col">
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
