import type { SelectRootChangeEventDetails } from "@base-ui/react/select";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useEmployeeFiltersStore } from "@/stores/useEmployeeFIltersStore";

interface SelectionProps {
  placeholder: string;
  onSelect: (value: string) => void;
}

function Selection({ placeholder, onSelect }: SelectionProps) {
  const { allJobTitles } = useEmployeeFiltersStore();

  return (
    <Select
      onValueChange={
        onSelect as (value: string | null, eventDetails: SelectRootChangeEventDetails) => void
      }
    >
      <SelectTrigger className="w-50 rounded-sm bg-white border-2 border-(--main-gray-light)/20 text-xs">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="rounded-sm">
        <SelectGroup className="rounded-sm p-1">
          {allJobTitles.map((jobTitle) => (
            <SelectItem
              className="rounded-sm cursor-pointer max-w-inherit px-2 max-w-48"
              key={jobTitle}
              value={jobTitle}
            >
              <span className="truncate block max-w-45">{`Position: ${jobTitle}`}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default Selection;
