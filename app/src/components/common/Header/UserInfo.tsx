import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useUserData } from "@/hooks/useUserInfo";
import { useAuthStore } from "@/stores/useAuthStore";

import avatar from '@/assets/avatars/mainAvatar.png'

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
    <div className="flex text-sm gap-3 font-secondary">
      <Avatar size="lg">
        <AvatarImage src={avatar} />
      </Avatar>
      <div className="flex flex-col">
        <span className="font-bold">{data?.fullName}</span>
        <span>{data?.jobTitle}</span>
      </div>
    </div>
  );
}

export default UserInfo;
