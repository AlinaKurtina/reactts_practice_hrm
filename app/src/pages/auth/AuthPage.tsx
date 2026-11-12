import AuthForm from "./components/AuthForm";
import MainFrame from "./components/MainFrame";

function AuthPage() {
  return (
    <div className="flex">
      <MainFrame />
      <AuthForm />
    </div>
  )
}

export default AuthPage;