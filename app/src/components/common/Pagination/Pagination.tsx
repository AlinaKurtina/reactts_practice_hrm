import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Card from "../Card";
import Selection from "../Selection";

function MyPagination() {
  return (
    <Card className="h-10 w-full shadow-[0_0_10px_rgba(0,0,0,0.17)] bg-white absolute -bottom-8 left-0">
      <Pagination className="justify-start">
        <PaginationContent className="gap-3">
          <PaginationPrevious className="cursor-pointer pr-1 hover:bg-red-50 hover:text-(--brand-red)" />
          {Array.from({ length: 5 }).map((_, i) => (
            <PaginationItem key={i} className="">
              <PaginationLink
                isActive={i === 0}
                className="rounded-md hover:bg-red-50 hover:text-(--brand-red) border-none"
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <span>...</span>
          <PaginationItem className="">
            <PaginationLink className="rounded-md hover:bg-red-50 hover:text-(--brand-red) border-none">
              15
            </PaginationLink>
          </PaginationItem>
          <Selection
            className="w-17 text-sm bg-red-50 text-(--brand-red)! border-none"
            selectionPlaceholder={"50"}
          ></Selection>
          <PaginationNext className="cursor-pointer pl-1 hover:bg-red-50 hover:text-(--brand-red) " />
        </PaginationContent>
      </Pagination>
    </Card>
  );
}

export default MyPagination;
