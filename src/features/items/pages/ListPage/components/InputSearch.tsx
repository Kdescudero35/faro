interface InputSearchProps {
    searchRef: React.RefObject<HTMLInputElement | null>;
    handleSearch: () => void;
}

export const InputSearch: React.FC<InputSearchProps> = ({ handleSearch, searchRef }) => {
    return (
        <div className="flex flex-col gap-3 w-full max-w-2xl sm:flex-row">
            <label className="flex flex-col w-full">
                <div className="flex flex-1 items-stretch w-full h-12 rounded-lg">
                    <input
                        ref={searchRef}
                        type="text"
                        className="overflow-hidden flex-1 px-4 w-full min-w-0 h-12 text-base font-normal leading-normal text-gray-900 bg-white rounded-lg border border-gray-300 resize-none form-input placeholder:text-gray-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500"
                        placeholder="Buscar productos, artículos ..."
                    />
                </div>
            </label>
            <button onClick={handleSearch} className="flex h-12 min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background-dark">
                <span className="truncate">Buscar</span>
            </button>
        </div>
    );
};