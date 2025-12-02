import { useListPage } from "../../hooks/useListPage";

import { Pagination } from "@/shared/components/Pagination";
import { ProductGrid } from "./components/ProductGrid";
import { SortToolbar } from "./components/SortToolbar";

import { ServiceUnavailable } from "@/shared/components/ServiceUnavailable";

const ListPage: React.FC = () => {
  const {
    limit,
    total,
    error,
    offset,
    loading,
    nextPage,
    prevPage,
    products,
    toggleSort,
    navigateToDetail,
  } = useListPage();

  if (error) {
    return <ServiceUnavailable />;
  }

  return (
    <div className="flex flex-col w-full h-auto min-h-screen gap-6">
      <SortToolbar onToggleSort={toggleSort} />
      <ProductGrid
        loading={loading}
        products={products}
        navigateToDetail={navigateToDetail}
      />
      <div className="flex gap-4 justify-center items-center mt-8">
        <Pagination
          limit={limit}
          total={total}
          offset={offset}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
    </div>
  );
};

export default ListPage;
