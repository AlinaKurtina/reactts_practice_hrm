import { NavigationMenuItem } from "@/components/ui/navigation-menu";
import type { PropsWithChildren } from "react";

interface NavItemProps extends PropsWithChildren {
  src?: string,
  title?: string
}

function NavItem({ src, children, title }: NavItemProps) {
  return (
    <NavigationMenuItem title={title} className="px-7 py-5 cursor-pointer transition-all duration-200 ease-in hover:bg-(--brand-red)/20 hover:shadow-[inset_3px_0_0_0_var(--brand-red)] hover:[--main-gray:var(--brand-red)]">
      {src && <img src={src} alt="NavIcon" />}
      {children}
    </NavigationMenuItem>
  )
}

export default NavItem;