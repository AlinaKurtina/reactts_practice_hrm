import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useUserData } from "@/hooks/queries/useUserInfo";
import { useAuthStore } from "@/stores/useAuthStore";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

import avatar from "@/assets/avatars/mainAvatar.png";
import Wrapper from "../Wrapper";
import { ChevronDown, ChevronUp, SquareArrowRightExit } from "lucide-react";
import { useLocalStorage } from "@/hooks/helpers/useLocalStorage";
import type { User } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import Dropdown from "./Dropdown";
import { useNavigate } from "@tanstack/react-router";

function UserInfoSkeleton() {
  return (
    <Wrapper className="text-sm gap-3 font-secondary">
      <Skeleton className="size-10 rounded-full shrink-0" />
      <Wrapper className="flex flex-col gap-1.5">
        <Skeleton className="h-4 w-28" />
        <Skeleton className="h-3.5 w-20" />
      </Wrapper>
      <Skeleton className="mt-2.5 size-5 rounded-sm shrink-0" />
    </Wrapper>
  );
}

function UserInfo() {
  const navigate = useNavigate();
  const uid = useAuthStore((state) => state.uid);
  const { setNewItem, getNewItem, removeSomeItem } = useLocalStorage();
  const savedData: User | null = getNewItem("userData");
  const { data, isLoading, error } = useUserData(uid);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  if (isLoading) return <UserInfoSkeleton />;
  if (error) return <span>Error</span>;
  if (data) {
    setNewItem("userData", data);
  }

  async function handleLogOut() {
    try {
      await signOut(auth);
      removeSomeItem("userData");
      await navigate({ to: "/auth" });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Wrapper className="text-sm gap-3 font-secondary relative">
      <Avatar size="lg">
        <AvatarImage src={avatar} />
      </Avatar>
      <Wrapper className="flex flex-col">
        <span className="font-bold">{data ? data.fullName : savedData?.fullName}</span>
        <span>{data ? data.jobTitle : savedData?.jobTitle}</span>
      </Wrapper>
      {isDropdownOpen ? (
        <ChevronUp
          className="cursor-pointer mt-2.5 size-5 text-(--main-gray)"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        />
      ) : (
        <ChevronDown
          className="cursor-pointer mt-2.5 size-5 text-(--main-gray)"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        />
      )}
      {isDropdownOpen && (
        <Dropdown className="shadow-[0_10px_15px_-4px_rgba(0,0,0,0.12)] border-t justify-center">
          <Wrapper
            className="flex items-center gap-2 cursor-pointer hover:bg-(--main-gray-lighter) hover:font-semibold px-5 py-2"
            onClick={handleLogOut}
          >
            <span className="font-head">Log Out</span>
            <SquareArrowRightExit color="#c63031" className="size-4" />
          </Wrapper>
        </Dropdown>
      )}
    </Wrapper>
  );
}

export default UserInfo;
