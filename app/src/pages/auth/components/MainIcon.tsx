import type { PropsWithChildren } from "react";

function MainIcon({ children }: PropsWithChildren) {
  return (
    <div className="p-5 border-3 border-white rounded-full opacity-70">
      {children}
    </div>
  )
}

export default MainIcon;