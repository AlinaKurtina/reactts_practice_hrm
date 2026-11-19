import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import Card from "../Card";
import { CalendarDays, ClipboardList, List, Network, Settings, UserRound } from "lucide-react";
import NavItem from "./NavItem";
import type React from "react";
import NavBarAdditional from "./NavBarAdditional";
import Wrapper from "../Wrapper";
import Gradient from "../Gradient";

interface NavLink {
  title: string;
  component: React.ReactElement;
  link?: string;
}

const NAV: NavLink[] = [
  {
    title: "Employees",
    component: <UserRound className="nav-item" color="var(--main-gray-light)" />,
    link: "/employees",
  },
  {
    title: "Contents",
    component: <Network className="nav-item" color="var(--main-gray-light)" />,
    link: "/contents",
  },
  {
    title: "List",
    component: <List className="nav-item" color="var(--main-gray-light)" />,
  },
  {
    title: "Notebook",
    component: <ClipboardList className="nav-item" color="var(--main-gray-light)" />,
  },
  {
    title: "Calendar",
    component: <CalendarDays className="nav-item" color="var(--main-gray-light)" />,
  },
  {
    title: "Settings",
    component: <Settings className="nav-item" color="var(--main-gray-light)" />,
  },
];

function NavBar() {
  return (
    <Card className="w-fit shadow-xl p-0 bg-white flex-col h-screen mr-auto fixed">
      <Wrapper className="flex-col items-center gap-60 relative">
        <Gradient className="h-2 from-(--main-gray-light)/10 -z-10"/>
        <NavigationMenu className="flex-col h-100dvh w-fit justify-baseline mt-0.5 list-none z-1">
          {NAV.map((icon, i) =>
            icon.link ? (
              <Link key={i} to={icon.link}>
                <NavItem title={icon.title}>{icon.component}</NavItem>
              </Link>
            ) : (
              <NavItem key={i} title={icon.title}>
                {icon.component}
              </NavItem>
            ),
          )}
        </NavigationMenu>
        <NavBarAdditional />
      </Wrapper>
    </Card>
  );
}

export default NavBar;
