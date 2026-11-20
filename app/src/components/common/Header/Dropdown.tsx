import type { ComponentProps } from "react";
import Card from "../Card";
import { cn } from "cn";

function Dropdown({ children, className, ...props }: ComponentProps<"div">) {
  return (
    <Card className={cn("w-49 absolute z-2 top-13.5 left-1 t-10 bg-white", className)} {...props}>
      {children}
    </Card>
  );
}

export default Dropdown;
