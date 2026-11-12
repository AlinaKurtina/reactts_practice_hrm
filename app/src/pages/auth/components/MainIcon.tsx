import type { SrcLink } from "@/types";

function MainIcon({ src }: SrcLink) {
  return (
    <div className="p-5 border-3 border-white/70 rounded-full">
      <img src={src} className="size-8" alt="icon" />
    </div>
  )
}

export default MainIcon;