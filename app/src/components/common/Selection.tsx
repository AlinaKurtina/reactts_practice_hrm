import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface SelectionProps {
  placeholder: string
}

function Selection({ placeholder }: SelectionProps) {
  return (
    <Select>
      <SelectTrigger className="w-50 rounded-sm bg-white border-2 border-(--main-gray-light)/20 text-xs">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem>Alina Kurtsina</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default Selection;