import Content from '@/components/common/Content'
import Header from '@/components/common/Header/Header'
import NavBar from '@/components/common/NavBar/NavBar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
  component: () => (
    <>
      <Header />
      <NavBar />
      <Content>
        <Outlet />
      </Content>
    </>
  )
})
