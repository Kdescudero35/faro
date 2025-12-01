import { SearchX } from "lucide-react"

import { SkeletonListPage } from "@/shared/components/Skeleton/SkeletonListPage"
import { ProductCard } from "./ProductCard"

interface ProductGridProps {
    loading: boolean;
    products: any[];
    navigateToDetail: (id: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, loading, navigateToDetail }) => (
    <section className="bg-white rounded-none">
        <div className="flex flex-col w-full">
            {loading ? (
                [...Array(5)].map((_, i) => <SkeletonListPage key={i} />)
            ) : products.length > 0 ? (
                products.map((product) => (
                    <ProductCard key={product.id} product={product} onClick={() => navigateToDetail(product.id)} />
                ))
            ) : (
                <div className="py-12 text-center">
                    <section className="flex flex-col gap-6 justify-center items-center py-16 w-full text-center bg-gray-100 rounded-xl border border-gray-300 border-dashed">
                        <div className="p-4 rounded-full bg-primary/10 text-primary">
                            <SearchX size={48} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">No se encontraron resultados</h3>
                            <p className="text-gray-500">No se encontraron resultados para su búsqueda. Intente con diferentes palabras clave o verifique su ortografía.</p>
                        </div>
                    </section>
                </div>
            )}
        </div>
    </section>
);