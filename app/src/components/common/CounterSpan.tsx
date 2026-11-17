import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  count: number | undefined;
  counted: string;
  isLoading?: boolean;
}

function CounterSpan({ count, counted, isLoading }: Props) {
  if (isLoading) {
    return (
      <div className="py-3 flex items-center">
        <Skeleton className="h-4 w-28" />
      </div>
    );
  }

  return (
    <span className="text-(--main-gray-light)/45 text-xs py-3">
      {count} {counted} found
    </span>
  );
}

export default CounterSpan;
