import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

function AuthForm() {
  return (
    <div className="flex flex-col items-center justify-center min-w-2/4 gap-5 bg-white">
      <Logo />
      <FieldSet>
        <FieldLegend className="font-bold font-head"><span className="text-2xl">Innautomation</span> <span className="text-(--main-gray-light) text-2xl">Toolset</span></FieldLegend>
        <FieldGroup className="gap-3 mt-2">
          {/* <FieldLabel htmlFor="mail">Mail</FieldLabel> */}
          <Input id="mail" className="rounded-sm" placeholder="Mail" />
          {/* <FieldLabel htmlFor="password">Password</FieldLabel> */}
          <Input id="password" className="rounded-sm" placeholder="Password" />
        </FieldGroup>
        <Button className="cursor-pointer hover:bg-(--brand-red)">Log In</Button>
      </FieldSet>
    </div>
  )
}

export default AuthForm;