import Content from "@/components/common/Content";
import Header from "@/components/common/Header/Header";
import NavBar from "@/components/common/NavBar/NavBar";
import Wrapper from "@/components/common/Wrapper";
import Chat from "@/features/chat/Chat";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_app")({
  component: () => (
    <>
      <Header />
      <Wrapper className="grid">
        <NavBar />
        <Content>
          <Outlet />
        </Content>
        <Chat />
      </Wrapper>
    </>
  ),
});
