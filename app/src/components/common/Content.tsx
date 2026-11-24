import type React from "react";
import Card from "./Card";
import MyPagination from "./Pagination/Pagination";

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Card className="relative bg-white max-w-300 rounded-md justify-center ml-auto mr-auto mt-10">
        {children}
        <MyPagination />
      </Card>
    </div>
  );
}

export default Content;
