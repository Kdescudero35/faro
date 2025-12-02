import { useRef, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useDebounce } from "@/shared/hooks/useDebounce";
import { validateSearchInput } from "@/lib/validation";

interface UseHeaderReturn {
  searchRef: React.RefObject<HTMLInputElement | null>;
  inputValue: string;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  setSearchParams: ReturnType<typeof useSearchParams>[1];
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useHeader = (): UseHeaderReturn => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  const debouncedSearchValue = useDebounce(inputValue, 500);

  useEffect(() => {
    const query = searchParams.get("q") ?? "";
    if (searchRef.current && query !== inputValue) {
      searchRef.current.value = query;
      setInputValue(query);
    }
  }, []);

  useEffect(() => {
    const validatedValue = validateSearchInput(debouncedSearchValue);

    if (validatedValue) {
      setSearchParams({ q: validatedValue });
    } else if (debouncedSearchValue === "") {
      setSearchParams({});
    }
  }, [debouncedSearchValue, setSearchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const validatedValue = validateSearchInput(inputValue);
      if (validatedValue) {
        setSearchParams({ q: validatedValue });
      }
    }
  };

  return {
    searchRef,
    inputValue,
    handleKeyPress,
    setSearchParams,
    handleInputChange,
  };
};

export default useHeader;
