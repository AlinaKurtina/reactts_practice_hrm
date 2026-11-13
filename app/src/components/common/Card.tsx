import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Card({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("flex px-7 py-1 shadow-[0_0_15px_rgba(0,0,0,0.12)] max-w-360", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
