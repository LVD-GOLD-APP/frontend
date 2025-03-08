import Link from "next/link";
import { Home, ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  title: string;
  links: { text: string; href: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ title, links }) => {
  return (
    <nav className="lg:max-w-[1420px] mx-auto flex items-center text-sm text-gray-600 overflow-x-auto whitespace-nowrap scrollbar-hide pl-3 m-2">
      {/* Link Trang chủ */}
      <Link href="/" className="flex items-center shrink-0 hover:text-red-500">
        <Home className="h-4 w-4 mr-1" />
        Trang chủ
      </Link>

      {/* Danh sách Links */}
      {links.map((link, index) => (
        <Link key={index} href={link.href} className="flex items-center shrink-0 hover:text-red-500">
          <ChevronRight className="h-4 w-4 mx-1" />
          {link.text}
        </Link>
      ))}

      {/* Dấu mũi tên cuối + Title cuối cùng */}
      <ChevronRight className="h-4 w-4 mx-1 hidden sm:block shrink-0" />
      <span className="text-blue-500 hidden sm:block shrink-0">{title || "Chi tiết sản phẩm"}</span>
    </nav>
  );
};

export default Breadcrumbs;
