import React from 'react';
import { cn } from 'cn';

function Gradient({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn(`h-150 w-full bg-linear-to-b from-transparent to-transparent absolute`, className)} {...props}></div>
}

export default Gradient;