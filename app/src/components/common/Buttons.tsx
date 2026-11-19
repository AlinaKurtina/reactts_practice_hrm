import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  text: string;
  className?: string;
  onClick?: () => void;
}

function MyButton({ text, className, onClick }: Props) {
  return (
    <Button
      className={cn(
        "bg-(--brand-red) rounded-sm px-10 cursor-pointer hover:bg-black font-head text-xs",
        className,
      )}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}

export default MyButton;
