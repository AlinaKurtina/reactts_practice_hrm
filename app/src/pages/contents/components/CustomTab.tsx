import { TabsTrigger } from "@/components/ui/tabs";

interface TabProps {
  value: string;
  setFn: () => void 
}

function CustomTab({ value, setFn }: TabProps) {
  return (
    <>
      <TabsTrigger
        value={value.toLowerCase()}
        className="rounded-xs border-b-2 cursor-pointer border-transparent data-active:border-b-(--brand-red) pb-4 pt-1.5"
        onClick={setFn}
      >
        {value}
      </TabsTrigger>
    </>
  );
}

export default CustomTab;
