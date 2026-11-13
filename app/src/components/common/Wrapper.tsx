import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Wrapper({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("flex max-w-360", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export default Wrapper;