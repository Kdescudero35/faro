import { InputSearch } from "./InputSearch";

interface HeroHeaderProps {
    handleSearch: () => void;
    searchRef: React.RefObject<HTMLInputElement | null>;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({ handleSearch, searchRef }) => (
    <section className="flex flex-col gap-6 items-center py-12 text-center md:py-20">
        <div className="flex flex-col gap-3">
            <p className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                Encuentra tu próximo artículo favorito
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg">
                Busca productos, artículos y más para descubrir lo que necesitas.
            </p>
        </div>
        <InputSearch handleSearch={handleSearch} searchRef={searchRef} />
    </section>
);