import { Button } from "@shared/components/Button";

interface PaginationProps {
  limit: number;
  offset: number;
  total: number;
  prevPage: () => void;
  nextPage: () => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  limit,
  offset,
  total,
  prevPage,
  nextPage,
}) => {
  return (
    <>
      <Button
        onClick={prevPage}
        disabled={offset === 0}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
      >
        Anterior
      </Button>
      <span className="text-sm text-gray-600 dark:text-gray-400">
        Página {Math.floor(offset / limit) + 1}
      </span>
      <Button
        onClick={nextPage}
        disabled={offset + limit >= total}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
      >
        Siguiente
      </Button>
    </>
  );
};
