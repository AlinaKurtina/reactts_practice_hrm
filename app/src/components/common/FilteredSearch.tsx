import MyButton from "./Buttons";
import Search, { type SearchProps } from "./Search/Search";
import Selection, { type SelectionProps } from "./Selection/Selection";
import Wrapper from "./Wrapper";

interface Props extends SelectionProps, SearchProps {
  onReset: () => void;
  onApply: () => void;
}

function FilteredSearch({
  placeholder,
  selectionPlaceholder,
  onSearch,
  onApply,
  onReset,
  onSelect,
  currentSelectValue,
}: Props) {
  return (
    <Wrapper className="flex-col gap-3.5">
      <Search placeholder={placeholder} onSearch={onSearch} />
      <Wrapper>
        <Selection
          selectionPlaceholder={selectionPlaceholder}
          onSelect={onSelect}
          currentSelectValue={currentSelectValue}
        />
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
