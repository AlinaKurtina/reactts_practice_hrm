import Wrapper from "@/components/common/Wrapper";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface Props {
  fullName: string;
  src?: string;
}

function AvatarNameCell({ fullName, src }: Props) {
  return (
    <Wrapper className="gap-5 items-center">
      <Avatar size="default">
        <AvatarImage src={src} />
      </Avatar>
      <span>{fullName}</span>
    </Wrapper>
  );
}

export default AvatarNameCell;
