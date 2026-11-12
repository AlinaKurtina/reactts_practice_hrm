import type { SrcLink } from "@/types";

function NavIcon({ src }: SrcLink) {
  return (
    <img src={src} alt="NavIcon" />
  )
}

export default NavIcon;