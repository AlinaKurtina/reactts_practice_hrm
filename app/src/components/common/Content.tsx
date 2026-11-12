import type React from "react";
import Container from "./Container";
import Paginations from "./Pagination/Pagination";

function Content({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Container className="ml-30 mt-10 min-h-165 min-w-330 bg-white w-5 relative">
        {children}
        <Paginations />
      </Container>
    </div>
  )
}

export default Content;

