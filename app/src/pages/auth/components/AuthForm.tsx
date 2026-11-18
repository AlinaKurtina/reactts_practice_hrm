import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { auth } from "@/lib/firebase";
import { getRouteApi } from "@tanstack/react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { useAuthStore } from "@/stores/useAuthStore";
import Wrapper from "@/components/common/Wrapper";
import Card from "@/components/common/Card";

const routeApi = getRouteApi("/auth");

function AuthForm() {
  const navigate = routeApi.useNavigate();
  const setUserUID = useAuthStore((state) => state.setUserUID);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function logIn() {
    try {
      const authenticate = await signInWithEmailAndPassword(auth, email, password);
      const user = authenticate.user;
      console.log(user);
      setUserUID(user.uid);
      await navigate({ to: "/contents" });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Wrapper className="flex-col items-center justify-center min-w-2/4 bg-white min-h-screen">
      <div className="flex flex-col items-center gap-5 mt-auto w-full h-full">
        <Logo />
        <FieldSet>
          <FieldLegend className="font-bold font-head">
            <span className="text-2xl">Innautomation</span>{" "}
            <span className="text-(--main-gray-light) text-2xl">Toolset</span>
          </FieldLegend>
          <FieldGroup className="gap-3 mt-2">
            <Input
              id="mail"
              className="rounded-sm"
              placeholder="Mail"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Input
              id="password"
              className="rounded-sm"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </FieldGroup>
          <Button className="cursor-pointer hover:bg-(--brand-red)" onClick={logIn}>
            Log In
          </Button>
        </FieldSet>
      </div>
      <span className="text-(--main-gray-light)/80 mt-auto mb-1">Version: 1.0.0</span>
      <Card className="w-full justify-center text-sm text-(--main-gray-light)/80">
        Technical support
      </Card>
    </Wrapper>
  );
}

export default AuthForm;
