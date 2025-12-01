import { InputSearch } from "./InputSearch";

interface HeroHeaderProps {
    handleSearch: () => void;
    searchRef: React.RefObject<HTMLInputElement | null>;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({ handleSearch, searchRef }) => (
    <section className="w-full bg-yellow-400 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4">
                <InputSearch handleSearch={handleSearch} searchRef={searchRef} />
            </div>
        </div>
    </section>
);