import type { SelectRootChangeEventDetails } from "@base-ui/react/select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "cn";

export interface SelectionProps extends Omit<
  React.ComponentPropsWithoutRef<typeof SelectTrigger>,
  "onSelect" | "value"
> {
  selectionPlaceholder: string;
  onSelect?: (value: string) => void;
  currentSelectValue?: string | null;
  selectionData?: Array<string>;
}

function Selection({
  selectionPlaceholder: placeholder,
  onSelect,
  currentSelectValue,
  selectionData,
  className,
  ...props
}: SelectionProps) {
  return (
    <Select
      value={currentSelectValue}
      onValueChange={
        onSelect as (value: string | null, eventDetails: SelectRootChangeEventDetails) => void
      }
    >
      <SelectTrigger
        className={cn(
          "w-50 rounded-sm bg-white border-2 border-(--main-gray-light)/20 text-xs",
          className,
        )}
        {...props}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="rounded-sm">
        <SelectGroup className="rounded-sm p-1">
          {selectionData?.map((selectOption) => (
            <SelectItem
              className="rounded-sm cursor-pointer max-w-inherit px-2 max-w-48"
              key={selectOption}
              value={selectOption}
            >
              <span className="truncate block max-w-40">{`${selectOption}`}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default Selection;
