import MyButton from "./Buttons";
import Search from "./Search/Search";
import Selection from "./Selection";
import Wrapper from "./Wrapper";

interface Props {
  searchPlaceholder: string;
  selectionPlaceholder: string;
}

function FilteredSearch({ searchPlaceholder, selectionPlaceholder }: Props) {
  return (
    <Wrapper className="flex-col gap-3.5">
      <Search placeholder={searchPlaceholder} />
      <Wrapper>
        <Selection placeholder={selectionPlaceholder} />
        <MyButton
          text="Reset"
          className="bg-white text-(--brand-red) px-6 cursor-pointer rounded-sm hover:bg-red-50"
        />
        <MyButton text="Apply" />
      </Wrapper>
    </Wrapper>
  );
}

export default FilteredSearch;
