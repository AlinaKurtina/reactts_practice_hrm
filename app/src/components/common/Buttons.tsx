import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function MyButton({ text, className }: { text: string, className?: string }) {
  return <Button className={cn("bg-(--brand-red) rounded-sm px-10 cursor-pointer hover:bg-black font-head text-xs", className)}>{text}</Button>
}

export default MyButton;