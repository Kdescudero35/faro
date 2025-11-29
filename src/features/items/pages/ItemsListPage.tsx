import { ListFilter, LayoutGrid, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ItemsListPage: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigateToDetail = (id: string) => {
        navigate(`/items/${id}`);
    };

    const test = {
        "query": "iphone",
        "paging": { "total": 1500, "offset": 0, "limit": 10 },
        "results": [
            {
                "id": "MLA100000001",
                "title": "Apple iPhone 13 (128 GB) - Azul",
                "price": 1367999,
                "currency_id": "ARS",
                "condition": "new",
                "thumbnail": "https://www.clevercel.co/cdn/shop/files/Portadas_iPhone13.webp?v=1757093138",
                "installments": { "quantity": 12, "amount": 113999.92 },
                "shipping": { "free_shipping": true },
                "reviews": { "rating_average": 4.9, "total": 35 }
            },
            {
                "id": "MLA100000002",
                "title": "iPhone 13 (close-up)",
                "price": 1425000,
                "currency_id": "ARS",
                "condition": "new",
                "thumbnail": "https://www.clevercel.co/cdn/shop/files/Portadas_iPhone13Mini.webp?v=1757093138"
            },
            {
                "id": "MLA100000003",
                "title": "iPhone 14 Pro Max (256 GB) - Negro",
                "price": 2290000,
                "currency_id": "ARS",
                "installments": { "quantity": 12, "amount": 216666.67 },
                "condition": "new",
                "thumbnail": "https://www.clevercel.co/cdn/shop/files/Portadas_iPhone14ProMax.webp?v=1757093138"
            },
            {
                "id": "MLA100000004",
                "title": "iPhone 14 Pro Max (512 GB) - Grafito",
                "price": 2499000,
                "currency_id": "ARS",
                "condition": "new",
                "thumbnail": "https://www.clevercel.co/cdn/shop/files/Portadas_iPhone14ProMax.webp?v=1757093138"
            },
            {
                "id": "MLA100000005",
                "title": "iPhone 12 Pro (256 GB) - Plata",
                "price": 1099999,
                "currency_id": "ARS",
                "condition": "used",
                "thumbnail": "https://www.clevercel.co/cdn/shop/files/Portadas_iPhone12Pro.webp?v=1757093138",
                "shipping": { "free_shipping": true },
                "reviews": { "rating_average": 4.8, "total": 143 }
            },
            {
                "id": "MLA100000006",
                "title": "iPhone 12 Pro (128 GB) - Negro",
                "price": 1049000,
                "currency_id": "ARS",
                "condition": "used",
                "reviews": { "rating_average": 3.9, "total": 35 },
                "thumbnail": "https://www.clevercel.co/cdn/shop/files/Portadas_iPhone12Pro.webp?v=1757093138"
            },
            {
                "id": "MLA100000007",
                "title": "iPhone 11 Pro (128 GB) - Negro",
                "price": 799999,
                "currency_id": "ARS",
                "condition": "used",
                "thumbnail": "https://www.clevercel.co/cdn/shop/files/Portadas_iPhone11Pro.webp?v=1757093138"
            },
            {
                "id": "MLA100000008",
                "title": "iPhone X (64 GB) - Gris Espacial",
                "price": 365000,
                "currency_id": "ARS",
                "condition": "used",
                "thumbnail": "https://olimpica.vtexassets.com/arquivos/ids/857916/image-3ab3283018f745408dbb770795103ea9.jpg?v=637897845793170000",
                "reviews": { "rating_average": 4.3, "total": 410 }
            },
            {
                "id": "MLA100000009",
                "title": "iPhone 8 (64 GB) - Gris Espacial",
                "price": 455000,
                "currency_id": "ARS",
                "condition": "used",
                "thumbnail": "https://exitocol.vtexassets.com/arquivos/ids/24430982/iphone-8-plus-64-gb-gris-espacial-reacondicionado-14-meses-garantia.jpg?v=638609084682100000"
            },
            {
                "id": "MLA100000010",
                "title": "iPhone 12 Pro Max (256 GB) - Vista trasera",
                "price": 1699000,
                "currency_id": "ARS",
                "condition": "used",
                "thumbnail": "https://www.clevercel.co/cdn/shop/files/Portadas_iPhone12ProMax.webp?v=1757093138",
                "shipping": { "free_shipping": true }
            }
        ]
    }

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
                                type="text"
                                className="overflow-hidden flex-1 px-4 w-full min-w-0 h-12 text-base font-normal leading-normal text-gray-900 bg-white rounded-lg border border-gray-300 resize-none form-input placeholder:text-gray-400 focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/20 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500"
                                placeholder="Buscar productos, artículos ..."
                                value={""}
                                onChange={(e) => { }}
                            />
                        </div>
                    </label>
                    <button className="flex h-12 min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-5 text-base font-bold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background-dark">
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

                    {test.results.map((item) => (
                        <div key={item.id} className="flex overflow-hidden flex-col bg-white rounded-xl border border-gray-200 shadow-sm transition-all duration-300 group hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20">
                            <div className="overflow-hidden relative aspect-video">
                                <img className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105" data-alt="A modern wristwatch with a white face and brown leather strap on a blurred background." src={item.thumbnail} />
                            </div>
                            <div className="flex flex-col flex-1 p-4">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>

                                <div className="flex flex-col gap-1 mt-2">
                                    {item.installments && (
                                        <p className="text-sm text-green-600 dark:text-green-400">
                                            {item.installments.quantity}x ${item.installments.amount.toLocaleString('es-CO', { minimumFractionDigits: 0 })}
                                        </p>
                                    )}
                                    <div className="flex flex-wrap gap-2 items-center">
                                        {item.shipping?.free_shipping && (
                                            <span className="inline-flex self-start px-2 py-0.5 text-xs font-semibold text-green-700 bg-green-100 rounded dark:bg-green-900/30 dark:text-green-400">
                                                Envío gratis
                                            </span>
                                        )}
                                        {item.condition && (
                                            <span className={`inline-flex self-start px-2 py-0.5 text-xs font-semibold rounded ${item.condition === 'new'
                                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                                : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                                                }`}>
                                                {item.condition === 'new' ? 'Nuevo' : 'Usado'}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {item.reviews && (
                                    <div className="flex gap-2 items-center mt-2">
                                        <div className="flex gap-0.5 items-center">
                                            {[...Array(5)].map((_, index) => (
                                                <Star
                                                    key={index}
                                                    size={14}
                                                    className={`${index < Math.floor(item.reviews.rating_average)
                                                        ? 'fill-yellow-400 text-yellow-400'
                                                        : 'text-gray-300 dark:text-gray-600'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                            {item.reviews.rating_average.toFixed(1)}
                                        </span>
                                        <span className="text-xs text-gray-400 dark:text-gray-500">
                                            ({item.reviews.total})
                                        </span>
                                    </div>
                                )}

                                <div className="flex flex-1 justify-between items-end mt-4">
                                    <p className="text-lg font-semibold text-gray-900 dark:text-white">${item.price.toLocaleString('es-CO', { minimumFractionDigits: 0 })}</p>
                                    <button
                                        onClick={() => handleNavigateToDetail(item.id)}
                                        className="px-4 py-2 text-sm font-semibold rounded-lg transition-colors text-primary bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:text-white dark:hover:bg-primary/30"
                                    >
                                        Ver Detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </>
    );
};

export default ItemsListPage;
