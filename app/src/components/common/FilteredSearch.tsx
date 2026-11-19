import type { SelectRootChangeEventDetails } from "@base-ui/react/select";
import MyButton from "./Buttons";
import Search from "./Search/Search";
import Selection from "./Selection/Selection";
import Wrapper from "./Wrapper";

interface Props {
  searchPlaceholder: string;
  selectionPlaceholder: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement, Element>) => void;
  onSelect: (value: string) => void;
  onReset: () => void;
  onApply: () => void;
}

function FilteredSearch({ searchPlaceholder, selectionPlaceholder, onSearch, onApply, onReset, onSelect }: Props) {
  return (
    <Wrapper className="flex-col gap-3.5">
      <Search placeholder={searchPlaceholder} onSearch={onSearch} />
      <Wrapper>
        <Selection placeholder={selectionPlaceholder} onSelect={onSelect} />
        <MyButton
          text="Reset"
          className="bg-white text-(--brand-red) px-6 cursor-pointer rounded-sm hover:bg-red-50"
          onClick={onReset}
        />
        <MyButton text="Apply" onClick={onApply} />
      </Wrapper>
    </Wrapper>
  );
}

export default FilteredSearch;
