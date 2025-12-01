interface SortToolbarProps {
  sort: "price_asc" | "price_desc" | null;
  condition: "new" | "used" | null;
  onToggleSort: () => void;
  onToggleCondition: (condition: "new" | "used") => void;
}

export const SortToolbar: React.FC<SortToolbarProps> = ({ onToggleSort }) => (
  <section className="flex flex-wrap gap-4 justify-end items-center py-3 px-4 w-full bg-gray-50 border-b border-gray-200 text-sm">
    <span className="text-gray-600">Ordenar por</span>
    <select
      className="px-3 py-1 text-sm border border-gray-300 rounded-none bg-white text-gray-900 hover:bg-gray-50 focus:outline-none"
      onChange={(e) => {
        if (e.target.value === "asc" || e.target.value === "desc") {
          onToggleSort();
        }
      }}
    >
      <option value="">Más relevantes</option>
      <option value="asc">Precio: menor a mayor</option>
      <option value="desc">Precio: mayor a menor</option>
    </select>
  </section>
);
