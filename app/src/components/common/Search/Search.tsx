import { Input } from "../../ui/input";
import searchIcon from './assets/search.svg';

function Search({ placeholder }: { placeholder?: string }) {
  return (
    <div className="flex items-center">
      <img src={searchIcon} alt="search-icon" className="absolute w-3 ml-2 z-2" />
      <Input className="rounded-sm relative pl-7 text-sm font-secondary max-w-50" placeholder={placeholder} />
    </div>
  )
}

export default Search;