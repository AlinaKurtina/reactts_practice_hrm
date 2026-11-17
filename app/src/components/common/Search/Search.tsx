import { Input } from "../../ui/input";
import searchIcon from "@/assets/search.svg";

interface Props {
  placeholder?: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement, Element>) => void;
}

function Search({ placeholder, onSearch }: Props) {
  return (
    <div className="flex items-center">
      <img src={searchIcon} alt="search-icon" className="absolute w-3 ml-2 z-2" />
      <Input
        className="rounded-sm relative pl-7 text-sm font-secondary max-w-50"
        placeholder={placeholder}
        onChange={onSearch}
      />
    </div>
  );
}

export default Search;
