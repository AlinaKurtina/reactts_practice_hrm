import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useUserData } from "@/hooks/useUserInfo";
import { useAuthStore } from "@/stores/useAuthStore";

import avatar from "@/assets/avatars/mainAvatar.png";
import Wrapper from "../Wrapper";
import { ChevronDown } from "lucide-react";

function UserInfo() {
  const uid = useAuthStore((state) => state.uid);
  // const setJobTitle = useAuthStore((state) => state.setUserJobTitle);
  // const setFullName = useAuthStore((state) => state.setUserFullname);
  const { data, isLoading, error } = useUserData(uid);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error</span>;

  // setFullName(data?.fullName);
  // setJobTitle(data?.fullName);

  return (
    <Wrapper className="text-sm gap-3 font-secondary">
      <Avatar size="lg">
        <AvatarImage src={avatar} />
      </Avatar>
      <Wrapper className="flex flex-col">
        <span className="font-bold">{data?.fullName}</span>
        <span>{data?.jobTitle}</span>
      </Wrapper>
      <ChevronDown className="cursor-pointer mt-2.5 size-5 text-(--main-gray)" />
    </Wrapper>
  );
}

export default UserInfo;
