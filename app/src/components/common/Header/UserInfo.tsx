import { Avatar } from "@/components/ui/avatar";
import type { User } from "@/types";

function UserInfo({fullName, jobTitle}: User) {
  return (
    <div className="flex text-sm gap-3 font-secondary">
      <Avatar size="lg" />
      <div className="flex flex-col">
        <span className="font-bold">{fullName}</span>
        <span>{jobTitle}</span>
      </div>
    </div>
  ) 
}

export default UserInfo;