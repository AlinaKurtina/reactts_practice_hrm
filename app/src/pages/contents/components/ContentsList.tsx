import ContentsCard from "./ContentsCard/ContentsCard";
import Wrapper from "@/components/common/Wrapper";

function ContentsList() {
  return (
    <div className="flex flex-col">
      <span className="text-(--main-gray-light)/45 text-xs py-3">6 courses found</span>
      <Wrapper className="flex-col overflow-y-scroll max-h-100 scrollbar-thin gap-3.5 max-w-full">
        <ContentsCard />
        <ContentsCard />
        <ContentsCard />
        <ContentsCard />
        <ContentsCard />
      </Wrapper>
    </div>
  )
}

export default ContentsList;