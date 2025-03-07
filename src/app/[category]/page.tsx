import { notFound } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import ProductGrid from "./product-grid";
import instance from "@/lib/axios-interceptor";

interface Filter {
  id: string;
  name: string;
  options: string[];
}

interface CategoryData {
  title: string;
  description: string;
  filters?: Filter[];
}

interface Category {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface Meta {
  pagination: Pagination;
}

type CategoryResponse = Category[];

const commonFilters = [
  {
    id: "gender",
    name: "Giới tính",
    options: ["Nam", "Nữ", "Unisex"],
  },
  {
    id: "price",
    name: "Khoảng giá",
    options: ["Dưới 500.000₫", "500.000₫ - 1.000.000₫", "Trên 1.000.000₫"],
  },
];

const sortOptions = [
  { label: "Giá: từ thấp đến cao", value: "price-asc" },
  { label: "Giá: từ cao đến thấp", value: "price-desc" },
  { label: "Số lượt mua", value: "purchases" },
  { label: "Số lượt đánh giá", value: "reviews" },
  { label: "Số sao trung bình", value: "rating" },
  { label: "Mới nhất", value: "newest" },
  { label: "Tên sản phẩm", value: "name" },
];

async function getCategoryData(categorySlug: string): Promise<CategoryData | null> {
  try {
    const response = await instance.get<CategoryResponse>("/api/categories");

    if (!response || !response.data) {
      console.error("Dữ liệu từ API không hợp lệ:", response);
      return null;
    }

    const category = response.data.find((cat) => cat.slug === categorySlug);

    console.log("Danh mục tìm thấy:", category);

    return category
      ? { title: category.title, description: category.title, filters: [] }
      : null;
  } catch (error: any) {
    console.error("Lỗi khi gọi API:", error.message);
    return null;
  }
}


// Component chính
export default async function CategoryPage({ params }: { params: { category: string } }) {
  // Lấy dữ liệu category dựa trên slug
  const categoryData = await getCategoryData(params.category);

  // Nếu không tìm thấy category, hiển thị trang 404
  if (!categoryData) {
    notFound();
  }

  const allFilters = [...(categoryData.filters || []), ...commonFilters];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] bg-[url('/placeholder.svg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{categoryData.title}</h1>
          <p className="max-w-2xl">{categoryData.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Featured Products */}
        <div className="mb-12">
          <h2 className="text-center font-medium mb-8 relative">
            <span className="bg-white px-4 relative z-10">SẢN PHẨM ĐỀ XUẤT</span>
            <div className="absolute left-0 right-0 h-px bg-gray-200 top-1/2 -z-[1]" />
          </h2>
          <ProductGrid />
        </div>

        <div className="mb-8">
          <h2 className="text-center font-medium mb-8 relative">
            <span className="bg-white px-4 relative z-10">{categoryData.title}</span>
            <div className="absolute left-0 right-0 h-px bg-gray-200 top-1/2 -z-[1]" />
          </h2>

          {/* Bộ lọc và tìm kiếm */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {allFilters.map((filter) => (
              <Select key={filter.id}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={filter.name} />
                </SelectTrigger>
                <SelectContent>
                  {filter.options.map((option) => (
                    <SelectItem key={option} value={option.toLowerCase()}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ))}
            <Input type="search" placeholder="Tìm kiếm sản phẩm..." className="max-w-xs" />
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sắp xếp" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Danh sách sản phẩm */}
        <ProductGrid />
      </div>
    </div>
  );
}