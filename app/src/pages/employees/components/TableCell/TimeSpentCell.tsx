import { timeFormatter } from "@/lib/utils";

interface Props {
  time: number;
}

function TimeSpentCell({ time }: Props) {
  const { minutes, seconds } = timeFormatter(time);

  return (
    <>
      <span className="text-foreground">{minutes}</span> min{" "}
      <span className="text-foreground">{seconds}</span> sec
    </>
  );
}

export default TimeSpentCell;
