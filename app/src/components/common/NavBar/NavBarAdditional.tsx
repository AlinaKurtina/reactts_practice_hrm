import { CircleQuestionMark, Globe } from "lucide-react";
import Wrapper from "../Wrapper";

function NavBarAdditional() {
  return (
    <Wrapper className="flex-col gap-5">
      <CircleQuestionMark className="text-(--main-gray-light) size-5.5" />
      <Globe className="text-(--main-gray-light) size-5.5"/>
    </Wrapper>
  )
}

export default NavBarAdditional;