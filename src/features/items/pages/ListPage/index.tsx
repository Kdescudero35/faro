import { useListPage } from "../../hooks/useListPage"

import { Pagination } from "@/shared/components/Pagination"
import { HeroHeader } from "./components/HeroHeader"
import { ProductGrid } from "./components/ProductGrid"
import { SortToolbar } from "./components/SortToolbar"

import { ServiceUnavailable } from "@/shared/components/ServiceUnavailable"

const ListPage: React.FC = () => {
    const {
        sort,
        limit,
        total,
        error,
        offset,
        loading,
        nextPage,
        prevPage,
        products,
        searchRef,
        condition,
        toggleSort,
        handleSearch,
        toggleCondition,
        navigateToDetail,
    } = useListPage();

    if (error) {
        return <ServiceUnavailable />
    }

    return (
        <>
            <HeroHeader handleSearch={handleSearch} searchRef={searchRef} />
            <SortToolbar
                sort={sort}
                condition={condition}
                onToggleSort={toggleSort}
                onToggleCondition={toggleCondition}
            />
            <ProductGrid products={products} loading={loading} navigateToDetail={navigateToDetail} />
            <div className="flex gap-4 justify-center items-center mt-8">
                <Pagination
                    limit={limit}
                    offset={offset}
                    total={total}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            </div>
        </>
    );
};

export default ListPage;