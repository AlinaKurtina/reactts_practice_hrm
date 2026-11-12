import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Container from "../Container";

function Paginations() {
  return (
    <Container className="h-10 min-w-330 shadow-[0_0_10px_rgba(0,0,0,0.17)] bg-white absolute top-156 left-0">
      <Pagination>
        <PaginationContent>
          <PaginationPrevious className="cursor-pointer pr-1" />
          <PaginationNext className="cursor-pointer pl-1" />
        </PaginationContent>
      </Pagination>
    </Container>
  )
}

export default Paginations;