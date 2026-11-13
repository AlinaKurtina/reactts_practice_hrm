import Card from "../Card";
import Logo from "../Logo";
import Search from "../Search/Search";
import Wrapper from "../Wrapper";
import UserInfo from "./UserInfo";

function Header() {
  return (
    <Card className="bg-white max-w-dvw">
      <Wrapper className="shadow-none justify-between w-full justify-self-center">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center h-15 gap-5">
            <Logo className="w-40" />
            <hr aria-orientation="vertical" className="h-12 w-px border-none bg-(--main-gray-lighter)"></hr>
          </div>
          <div className="flex gap-5">
            <Search placeholder="Search" />
            <UserInfo />
          </div>
        </div>
      </Wrapper>
    </Card>
  )
}

export default Header;