import React from 'react';
import { ListFilter, LayoutGrid, Star } from 'lucide-react';

import { useListPage } from "../hooks/useListPage"
import { SkeletonListPage } from "@/shared/components/Skeleton/SkeletonListPage"

const ListPage: React.FC = () => {
    const { products, navigateToDetail, loading, handleSearch, nextPage, prevPage, offset, limit, searchRef } = useListPage();

    return (
        <>
            <section className="flex flex-col gap-6 items-center py-12 text-center md:py-20">
                <div className="flex flex-col gap-3">
                    <p className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white sm:text-5xl md:text-6xl">Encuentra tu próximo artículo favorito</p>
                    <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg">Busca productos, artículos y más para descubrir lo que necesitas.</p>
                </div>
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
            </section>

            <section className="flex flex-wrap gap-4 justify-between items-center py-4 mb-8 w-full border-gray-200 border-y dark:border-white/10">
                <div className="flex flex-wrap gap-4 items-center">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Ordenar por:</span>
                    <div className="flex gap-2">
                        <button className="rounded-full px-4 py-1.5 text-sm font-semibold bg-primary/10 text-primary dark:bg-primary/20 dark:text-white">Relevancia</button>
                        <button className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-200/60 dark:text-gray-300 dark:hover:bg-white/10">Nuevos</button>
                        <button className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-200/60 dark:text-gray-300 dark:hover:bg-white/10">Precio</button>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="flex justify-center items-center w-9 h-9 text-gray-600 rounded-lg border border-gray-300 dark:border-white/20 dark:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-white/10">
                        <ListFilter size={18} className='text-gray-600 dark:text-gray-300' />
                    </button>
                    <button className="flex justify-center items-center w-9 h-9 text-gray-600 rounded-lg border border-gray-300 dark:border-white/20 dark:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-white/10">
                        <LayoutGrid size={18} className='text-gray-600 dark:text-gray-300' />
                    </button>
                </div>
            </section>


            <section>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {products.length > 0 && !loading ? (
                        products.map((product) => (
                            <div key={product.id} className="flex overflow-hidden flex-col bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 group hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20">
                                <div className="overflow-hidden relative aspect-video">
                                    <img className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" data-alt="A modern wristwatch with a white face and brown leather strap on a blurred background." src={product.thumbnail} />
                                </div>
                                <div className="flex flex-col flex-1 p-4">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{product.title}</h3>

                                    <div className="flex flex-col gap-1 mt-2">
                                        {product.installments && (
                                            <p className="text-sm text-green-600 dark:text-green-400">
                                                {product.installments.quantity}x ${product.installments.amount.toLocaleString('es-CO', { minimumFractionDigits: 0 })}
                                            </p>
                                        )}
                                        <div className="flex flex-wrap gap-2 items-center">
                                            {product.shipping?.free_shipping && (
                                                <span className="inline-flex self-start px-2 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded dark:bg-green-900/30 dark:text-green-400">
                                                    Envío gratis
                                                </span>
                                            )}
                                            {product.condition && (
                                                <span className={`inline-flex self-start px-2 py-0.5 text-xs font-semibold rounded ${product.condition === 'new'
                                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                                    : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                                                    }`}>
                                                    {product.condition === 'new' ? 'Nuevo' : 'Usado'}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {product.reviews && (
                                        <div className="flex gap-2 items-center mt-2">
                                            <div className="flex gap-0.5 items-center">
                                                {[...Array(5)].map((_, index) => (
                                                    <Star
                                                        key={index}
                                                        size={14}
                                                        className={`${index < Math.floor(product.reviews?.rating_average ?? 0)
                                                            ? 'fill-yellow-400 text-yellow-400'
                                                            : 'text-gray-300 dark:text-gray-600'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                                {product.reviews.rating_average.toFixed(1)}
                                            </span>
                                            <span className="text-xs text-gray-400 dark:text-gray-500">
                                                ({product.reviews.total})
                                            </span>
                                        </div>
                                    )}

                                    <div className="flex flex-1 justify-between items-end mt-4">
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">${product.price.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</p>
                                        <button
                                            onClick={() => navigateToDetail(product.id)}
                                            className="px-4 py-2 text-sm font-semibold rounded-lg transition-colors text-primary bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:text-white dark:hover:bg-primary/30"
                                        >
                                            Ver Detalles
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        [...Array(8)].map((_, index) => (
                            <SkeletonListPage key={index} />
                        ))
                    )}
                </div>

                <div className="flex gap-4 justify-center items-center mt-8">
                    <button
                        onClick={prevPage}
                        disabled={offset === 0}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                    >
                        Anterior
                    </button>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                        Página {Math.floor(offset / limit) + 1}
                    </span>
                    <button
                        onClick={nextPage}
                        disabled={products.length < limit}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
                    >
                        Siguiente
                    </button>
                </div>
            </section>
        </>
    );
};

export default ListPage;
