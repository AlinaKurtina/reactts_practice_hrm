import Card from "@/components/common/Card";
import { Skeleton } from "@/components/ui/skeleton"; // Or replace with <div className="animate-pulse bg-muted rounded ..." />

function ContentsCardSkeleton() {
  return (
    <Card className="h-fit gap-15 items-center p-8 rounded-sm border min-w-full">
      <Skeleton className="size-12.25 rounded-full shrink-0" />
      <div className="flex flex-col w-full gap-1.5">
        <Skeleton className="h-3.5 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="flex flex-col w-full gap-1.5">
          <Skeleton className="h-3 w-2/3" />
          <Skeleton className="h-3.5 w-1/2" />
        </div>
      ))}
      <Skeleton className="size-8 rounded-full shrink-0" />
    </Card>
  );
}

export default ContentsCardSkeleton;