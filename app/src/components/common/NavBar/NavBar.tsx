import { NavigationMenu } from "@/components/ui/navigation-menu";
import Card from "../Card";

const imageList = fetchImagesLocal('navIcons');

import { fetchImagesLocal } from "@/lib/utils";
import NavItem from "./NavItem";

const NAV = [
  // {
  //   title: 'Structure',
  //   icon: Structure,
  //   role: 'admin'
  //   feature: 'structure'
  // }
]
// TODO:  сделать массим навигации. Переименовать иконки. 
function NavBar() {
  return (
    <Card className="w-fit shadow-xl p-0 fixed bg-white h-full mt-0.5">
      <NavigationMenu className="flex-col h-100dvh w-fit justify-baseline mt-10 list-none">
        {imageList.map((src, i) => (
          <NavItem src={src} key={i} />
        ))}
      </NavigationMenu>
    </Card>
  )
}

export default NavBar;