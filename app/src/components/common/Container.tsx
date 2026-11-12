import React from "react";
import { cn } from "cn";

function Container({ children, className, ...props }: { children?: React.ReactNode, className?: React.ComponentProps<"div"> }) {
  return (
    <div className={cn("flex p-7 pt-1 pb-1 shadow-md", className)} {...props}>
      {children}
    </div>
  )
}

export default Container;