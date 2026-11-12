import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import type { SrcLink } from "@/types";

function NavIcon({ src }: SrcLink) {
  return (
  <NavigationMenuItem>
    <img src={src} alt="NavIcon" />
  </NavigationMenuItem>
  )
}

export default NavIcon;