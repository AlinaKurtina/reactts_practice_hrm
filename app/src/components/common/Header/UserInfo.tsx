import { Avatar } from "@/components/ui/avatar";

function UserInfo() {
  return (
    <div className="flex text-sm gap-3 font-secondary">
      <Avatar size="lg" />
      <div className="flex flex-col">
        <span className="font-bold">Employee Name</span>
        <span>Position</span>
      </div>
    </div>
  ) 
}

export default UserInfo;