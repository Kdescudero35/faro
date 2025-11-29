import { ShoppingBag, Plus, Minus, HeartPlus, Star, StarHalf } from "lucide-react";

const ItemDetailPage: React.FC = () => {
    return (
        <div className="flex overflow-x-hidden relative flex-col w-full h-auto min-h-screen group/design-root">
            <div className="flex flex-col h-full layout-container grow">
                <main className="px-4 py-8 sm:px-6 lg:px-8 md:py-12">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
                            <div className="flex flex-col gap-4">
                                <div className="w-full bg-center bg-no-repeat bg-cover rounded-xl shadow-sm aspect-square" data-alt="Front view of the Urban Explorer Jacket in black" style={{ backgroundImage: 'url("https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/c321f174-0340-48e4-ba1c-06d1d85c1658/AIR+FORCE+1+%2707+WB.png")' }}></div>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="w-full bg-center bg-no-repeat bg-cover rounded-lg ring-2 aspect-square ring-primary" data-alt="Front view of the Urban Explorer Jacket" style={{ backgroundImage: 'url("https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/c321f174-0340-48e4-ba1c-06d1d85c1658/AIR+FORCE+1+%2707+WB.png")' }}></div>
                                    <div className="w-full bg-center bg-no-repeat bg-cover rounded-lg opacity-70 transition-opacity cursor-pointer aspect-square hover:opacity-100" data-alt="Back view of the Urban Explorer Jacket" style={{ backgroundImage: 'url("https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/c321f174-0340-48e4-ba1c-06d1d85c1658/AIR+FORCE+1+%2707+WB.png")' }}></div>
                                    <div className="w-full bg-center bg-no-repeat bg-cover rounded-lg opacity-70 transition-opacity cursor-pointer aspect-square hover:opacity-100" data-alt="Close up of the jacket's fabric" style={{ backgroundImage: 'url("https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/c321f174-0340-48e4-ba1c-06d1d85c1658/AIR+FORCE+1+%2707+WB.png")' }}></div>
                                    <div className="w-full bg-center bg-no-repeat bg-cover rounded-lg opacity-70 transition-opacity cursor-pointer aspect-square hover:opacity-100" data-alt="Jacket being worn outdoors" style={{ backgroundImage: 'url("https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/c321f174-0340-48e4-ba1c-06d1d85c1658/AIR+FORCE+1+%2707+WB.png")' }}></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <p className="text-sm font-semibold tracking-wide uppercase text-primary">Detalle</p>
                                    <h1 className="mt-1 text-3xl font-extrabold md:text-4xl text-slate-900 dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                                    <div className="flex gap-2 items-center mt-3">
                                        <div className="flex items-center text-amber-400">
                                            <Star size={18} />
                                            <Star size={18} />
                                            <Star size={18} />
                                            <Star size={18} />
                                            <StarHalf size={18} />
                                        </div>
                                        <p className="text-sm text-slate-500 dark:text-slate-400">4.5 (1,283 Vistas)</p>
                                    </div>
                                </div>
                                <p className="leading-relaxed text-slate-600 dark:text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia inventore nobis quo consequatur, fuga rerum assumenda veritatis incidunt, excepturi maiores dolor minus eligendi molestiae provident ea laborum voluptate eius vel?</p>
                                <p className="text-4xl font-bold text-slate-900 dark:text-white">$172.878</p>
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <label className="text-sm font-medium text-slate-900 dark:text-white">Color</label>
                                        <div className="flex gap-2 items-center mt-2">
                                            <button className="rounded-full ring-2 ring-offset-2 size-8 bg-slate-900 ring-primary ring-offset-background-light dark:ring-offset-background-dark"></button>
                                            <button className="bg-green-800 rounded-full size-8 hover:ring-2 ring-primary/50"></button>
                                            <button className="rounded-full size-8 bg-slate-500 hover:ring-2 ring-primary/50"></button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-slate-900 dark:text-white" htmlFor="size">Talla</label>
                                        <select className="block mt-2 w-full bg-white rounded-lg border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary/50" id="size" defaultValue="Medium">
                                            <option>XS</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                            <option>XXL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 items-center sm:flex-row">
                                    <div className="flex items-center rounded-lg border border-slate-300 dark:border-slate-700">
                                        <button className="p-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                                            <Minus size={18} />
                                        </button>
                                        <input className="w-12 text-center bg-transparent border-0 text-slate-900 dark:text-white focus:ring-0" type="text" defaultValue="1" />
                                        <button className="p-3 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
                                            <Plus size={18} />
                                        </button>
                                    </div>
                                    <button className="flex flex-1 gap-2 justify-center items-center px-6 py-3 w-full text-base font-bold text-white rounded-lg transition-colors bg-primary hover:bg-primary/90">
                                        <ShoppingBag size={18} />
                                        Agregar al carrito
                                    </button>
                                    <button className="p-3 bg-white rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary">
                                        <HeartPlus size={18} />
                                    </button>
                                </div>
                                <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
                                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">Detalles del producto</h3>
                                    <div className="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                                        <p>Informacion del producto</p>
                                        <ul className="space-y-1 list-disc list-inside">
                                            <li>Informacion del producto</li>
                                            <li>Informacion del producto</li>
                                            <li>Informacion del producto</li>
                                            <li>Informacion del producto</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ItemDetailPage;
