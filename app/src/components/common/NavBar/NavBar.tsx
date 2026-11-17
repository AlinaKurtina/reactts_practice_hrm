import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import Card from "../Card";
import { CalendarDays, ClipboardList, List, Network, Settings, UserRound } from "lucide-react";
import NavItem from "./NavItem";
import type React from "react";

interface NavLink {
  title: string;
  component: React.ReactElement;
  link?: string;
}

const NAV: NavLink[] = [
  {
    title: "Employees",
    component: <UserRound color="var(--main-gray)" />,
    link: "/employees",
  },
  {
    title: "Contents",
    component: <Network color="var(--main-gray)" />,
    link: "/contents",
  },
  {
    title: "List",
    component: <List color="var(--main-gray)" />,
  },
  {
    title: "Notebook",
    component: <ClipboardList color="var(--main-gray)" />,
  },
  {
    title: "Calendar",
    component: <CalendarDays color="var(--main-gray)" />,
  },
  {
    title: "Settings",
    component: <Settings color="var(--main-gray)" />,
  },
];

function NavBar() {
  return (
    <Card className="w-fit shadow-xl p-0 fixed bg-white h-full mt-0.5">
      <NavigationMenu className="flex-col h-100dvh w-fit justify-baseline mt-10 list-none">
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
    </Card>
  );
}

export default NavBar;
