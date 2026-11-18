import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useUserData } from "@/hooks/queryHooks/useUserInfo";
import { useAuthStore } from "@/stores/useAuthStore";

import avatar from "@/assets/avatars/mainAvatar.png";
import Wrapper from "../Wrapper";
import { ChevronDown } from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { User } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

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
  const uid = useAuthStore((state) => state.uid);
  const { setNewItem, getNewItem } = useLocalStorage();
  const savedData: User | null = getNewItem("userData");
  const { data, isLoading, error } = useUserData(uid);

  if (isLoading) return <UserInfoSkeleton />
  if (error) return <span>Error</span>;

  if (data) {
    setNewItem("userData", data);
  }

  return (
    <Wrapper className="text-sm gap-3 font-secondary">
      <Avatar size="lg">
        <AvatarImage src={avatar} />
      </Avatar>
      <Wrapper className="flex flex-col">
        <span className="font-bold">{data ? data.fullName : savedData?.fullName}</span>
        <span>{data ? data.jobTitle : savedData?.jobTitle}</span>
      </Wrapper>
      <ChevronDown className="cursor-pointer mt-2.5 size-5 text-(--main-gray)" />
    </Wrapper>
  );
}

export default UserInfo;
