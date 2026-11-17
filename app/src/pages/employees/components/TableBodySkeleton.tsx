import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

function TableBodySkeleton() {
  return (
    <TableRow>
      <TableCell>
        <div className="flex items-center gap-2.5">
          <Skeleton className="size-8 rounded-full shrink-0" />
          <Skeleton className="h-4 w-28" />
        </div>
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-24" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-60" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-16" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-8" />
      </TableCell>
      <TableCell>
        <Skeleton className="h-4 w-10" />
      </TableCell>
    </TableRow>
  );
}

export default TableBodySkeleton;
