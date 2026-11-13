import type React from "react";
import Card from "./Card";
import Paginations from "./Pagination/Pagination";

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Card className="ml-28 mt-8 min-h-165 min-w-333 bg-white w-5 relative rounded-md">
        {children}
        <Paginations />
      </Card>
    </div>
  )
}

export default Content;

