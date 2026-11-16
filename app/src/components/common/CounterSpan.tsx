interface Props {
  count: number | undefined;
  counted: string;
}

function CounterSpan({ count, counted }: Props) {
  return <span className="text-(--main-gray-light)/45 text-xs py-3">{count} {counted} found</span>;
}

export default CounterSpan;
