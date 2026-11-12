import Container from "../Container";
import Logo from "../Logo";
import Search from "../Search/Search";
import UserInfo from "./UserInfo";

function Header() {
  return (
    <Container>
      <div className="flex w-full items-center justify-between">
      <div className="flex items-center h-15 gap-5">
        <Logo className="w-40" />
        <hr aria-orientation="vertical" className="h-12 w-px border-none bg-(--main-gray-lighter)"></hr>
      </div>
      <div className="flex gap-5">
      <Search />
      <UserInfo />
      </div>
      </div>
    </Container>
  )
}

export default Header;