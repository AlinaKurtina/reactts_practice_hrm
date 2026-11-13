import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Card from "../Card";

function Paginations() {
  return (
    <Card className="h-10 min-w-333 shadow-[0_0_10px_rgba(0,0,0,0.17)] bg-white absolute top-156 left-0">
      <Pagination>
        <PaginationContent>
          <PaginationPrevious className="cursor-pointer pr-1" />
          <PaginationNext className="cursor-pointer pl-1" />
        </PaginationContent>
      </Pagination>
    </Card>
  )
}

export default Paginations;