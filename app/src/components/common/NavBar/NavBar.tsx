import { NavigationMenu, NavigationMenuItem } from "@/components/ui/navigation-menu";
import Container from "../Container";

const imageList = fetchImagesLocal('navIcons');

import NavIcon from "./NavIcon";
import { fetchImagesLocal } from "@/lib/utils";

function NavBar() {
  return (
  <Container className="w-fit shadow-xl p-0 fixed bg-white h-full mt-0.5">
    <NavigationMenu className="flex-col h-100dvh w-fit justify-baseline mt-10 list-none">
      {imageList.map((src, i) => (
        <NavigationMenuItem key={i} className="p-7 pb-5 pt-5 cursor-pointer transition-all duration-200 ease-in hover:bg-(--brand-red)/20 hover:border-l-(--brand-red) hover:border-l-3">
          <NavIcon src={src} />
        </NavigationMenuItem>
      ))}
    </NavigationMenu>
  </Container>
  )
}

export default NavBar;