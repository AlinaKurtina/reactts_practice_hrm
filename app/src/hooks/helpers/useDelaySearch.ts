import { debounce } from "@/lib/utils";
import { useEffect, useMemo, type Dispatch, type SetStateAction } from "react";

interface hookProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
  delay?: number;
}

export function useDelaySearch({ setSearchQuery, delay = 300 }: hookProps) {
  const setDebouncedSearchQuery = useMemo(
    () =>
      debounce((value: string) => {
        setSearchQuery(value);
      }, delay),
    [setSearchQuery, delay],
  );

  useEffect(() => {
    return () => setDebouncedSearchQuery.cancel();
  }, [setDebouncedSearchQuery]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDebouncedSearchQuery(e.currentTarget.value);

  return { handleSearch };
}
