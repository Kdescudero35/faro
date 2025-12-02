interface SortToolbarProps {
  onToggleSort: () => void;
}

export const SortToolbar: React.FC<SortToolbarProps> = ({ onToggleSort }) => (
  <section className="flex flex-wrap gap-4 justify-end items-center pt-3 w-full text-sm">
    <span className="text-gray-600">Ordenar por</span>
    <select
      className="px-3 py-1 text-sm border border-gray-300 rounded-none bg-white text-gray-900 hover:bg-gray-50 focus:outline-none"
      onChange={onToggleSort}
    >
      <option value="">Más relevantes</option>
      <option value="asc">Precio: menor a mayor</option>
      <option value="desc">Precio: mayor a menor</option>
    </select>
  </section>
);
