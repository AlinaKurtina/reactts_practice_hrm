import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import type { PropsWithChildren } from "react";

interface NavItemProps extends PropsWithChildren {
  src?: string,
}

// TODO: оставить как навигация, а для табов в курсах и других местах использовать отдельный компонент
function NavItem({ src, children }: NavItemProps) {
  return (
    <NavigationMenuItem className="px-7 py-5 cursor-pointer transition-all duration-200 ease-in hover:bg-(--brand-red)/20 hover:border-l-(--brand-red) hover:border-l-3">
      {src && <img src={src} alt="NavIcon" />}
      {children}
    </NavigationMenuItem>
  )
}

export default NavItem;