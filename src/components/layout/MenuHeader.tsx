import { Category } from "@/lib/api/menu";
import DropdownMenu from "../dropdown-menu";

interface MenuHeaderProps {
  categories: Category[];
}

export default function MenuPage({ categories }: MenuHeaderProps) {
  return (
    <div className="relative">
      <div className="flex flex-wrap justify-center">
        {categories.map((category, index) => (
          <DropdownMenu
            key={index}
            title={category.name}
            url={category.url}
            image={category.images}
            items={category.items}
          />
        ))}
      </div>
    </div>
  );
}
