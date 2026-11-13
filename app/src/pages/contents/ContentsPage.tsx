import MyButton from "@/components/common/Buttons";
import Search from "@/components/common/Search/Search";
import Selection from "@/components/common/Selection";
import ContentsList from "./components/ContentsList";
import Wrapper from "@/components/common/Wrapper";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function ContentsPage() {
  return (
    <>
      <Wrapper className="flex-col gap-5 w-full">
        <Tabs defaultValue="courses" className="py-2 border-b p-0 pt-2.5">
          <TabsList variant="line" className="p-0">
            <TabsTrigger value="courses" className="rounded-xs border-b-2 cursor-pointer border-transparent data-active:border-b-(--brand-red) pb-4">Courses</TabsTrigger>
            <TabsTrigger value="lectures" className="rounded-xs border-b-2 cursor-pointer border-transparent data-active:border-b-(--brand-red) pb-4">Lectures</TabsTrigger>
            <TabsTrigger value="quizes" className="rounded-xs border-b-2 cursor-pointer border-transparent data-active:border-b-(--brand-red) pb-4">Quizes</TabsTrigger>
          </TabsList>
        </Tabs>
        <Search placeholder="Course name" />
        <Wrapper>
          <Selection placeholder="Author..." />
          <MyButton text="Reset" className="bg-white text-(--brand-red) px-6 cursor-pointer rounded-sm hover:bg-red-50" />
          <MyButton text="Apply" />
        </Wrapper>
        <ContentsList />
      </Wrapper>
    </>
  )
}

export default ContentsPage;