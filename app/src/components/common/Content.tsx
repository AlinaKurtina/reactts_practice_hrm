import type React from "react";
import Card from "./Card";
import Paginations from "./Pagination/Pagination";

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Card className="ml-28 mt-8 min-h-165 bg-white max-w-333 relative rounded-md">
        {children}
        <Paginations />
      </Card>
    </div>
  )
}

export default Content;

