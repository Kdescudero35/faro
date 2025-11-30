import { ArrowDownAZ, ArrowUpAZ } from 'lucide-react';

interface SortToolbarProps {
    sort: 'price_asc' | 'price_desc' | null;
    condition: 'new' | 'used' | null;
    onToggleSort: () => void;
    onToggleCondition: (condition: 'new' | 'used') => void;
}

export const SortToolbar: React.FC<SortToolbarProps> = ({ sort, condition, onToggleSort, onToggleCondition }) => (
    <section className="flex flex-wrap gap-4 justify-between items-center py-4 mb-8 w-full border-gray-200 border-y dark:border-white/10">
        <div className="flex flex-wrap gap-4 items-center">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Ordenar por:</span>
            <div className="flex gap-2">
                <button
                    onClick={() => onToggleCondition('new')}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${condition === 'new'
                        ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white'
                        : 'text-gray-600 hover:bg-gray-200/60 dark:text-gray-300 dark:hover:bg-white/10'
                        }`}
                >
                    Nuevos
                </button>
                <button
                    onClick={() => onToggleCondition('used')}
                    className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${condition === 'used'
                        ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white'
                        : 'text-gray-600 hover:bg-gray-200/60 dark:text-gray-300 dark:hover:bg-white/10'
                        }`}
                >
                    Usados
                </button>
                <button
                    onClick={onToggleSort}
                    className={`flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${sort
                        ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-white'
                        : 'text-gray-600 hover:bg-gray-200/60 dark:text-gray-300 dark:hover:bg-white/10'
                        }`}
                >
                    Precio
                    {sort === 'price_asc' && <ArrowUpAZ size={14} />}
                    {sort === 'price_desc' && <ArrowDownAZ size={14} />}
                </button>
            </div>
        </div>
    </section>
);