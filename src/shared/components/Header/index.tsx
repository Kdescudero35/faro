import { ShoppingBag, Search } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useCartStore } from "@/store/cartStore";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { validateSearchInput } from "@/lib/validation";

export const Header = () => {
  const items = useCartStore((s) => s.items);
  const searchRef = useRef<HTMLInputElement>(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

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

  return (
    <header className="flex sticky top-0 z-50 justify-center items-center gap-4 px-4 py-3 border-b border-gray-300 bg-[#ffe600] sm:px-6 lg:px-8">
      
      <div className="flex flex-1 max-w-2xl items-stretch h-10 rounded-md">
        <input
          ref={searchRef}
          type="text"
          className="overflow-hidden flex justify-center items-center px-4 flex-1 h-10 text-sm font-normal leading-normal text-gray-900 bg-white rounded-l-md border border-gray-300 border-r-0 resize-none form-input placeholder:text-gray-500 focus:border-primary focus:outline-0 focus:ring-0"
          placeholder="Buscar productos, marcas y más..."
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={() => {
            const validatedValue = validateSearchInput(inputValue);
            if (validatedValue) {
              setSearchParams({ q: validatedValue });
            }
          }}
          className="flex h-10 min-w-[50px] cursor-pointer items-center justify-center overflow-hidden rounded-r-md bg-white px-4 text-base font-bold rounded-l-md border border-gray-300 border-r-0 resize-none text-white shadow-none transition-colors"
        >
          <Search size={18} className="text-gray-900" />
        </button>
      </div>

      <div className="flex gap-2 items-center shrink-0">
        <button className="relative p-2 rounded-full hover:bg-yellow-300">
          {items.length > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
              {items.length}
            </span>
          )}
          <ShoppingBag size={18} className="text-gray-900" />
        </button>
      </div>
    </header>
  );
};
