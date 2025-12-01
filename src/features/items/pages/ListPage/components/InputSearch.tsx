interface InputSearchProps {
  searchRef: React.RefObject<HTMLInputElement | null>;
  handleSearch: () => void;
}

export const InputSearch: React.FC<InputSearchProps> = ({
  handleSearch,
  searchRef,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full sm:flex-row">
      <label className="flex flex-col flex-1">
        <div className="flex flex-1 items-stretch w-[50%] h-11 rounded-md">
          <input
            ref={searchRef}
            type="text"
            className="overflow-hidden flex-1 px-4 w-full min-w-0 h-11 text-sm font-normal leading-normal text-gray-900 bg-white rounded-l-md border border-gray-300 border-r-0 resize-none form-input placeholder:text-gray-500 focus:border-primary focus:outline-0 focus:ring-0"
            placeholder="Buscar productos, marcas y más..."
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
      </label>
      <button
        onClick={handleSearch}
        className="flex h-11 min-w-[50px] cursor-pointer items-center justify-center overflow-hidden rounded-r-md bg-gray-900 px-4 text-base font-bold text-white shadow-none transition-colors hover:bg-gray-800 focus-visible:outline-none"
      >
        <span className="truncate text-sm">🔍</span>
      </button>
    </div>
  );
};
