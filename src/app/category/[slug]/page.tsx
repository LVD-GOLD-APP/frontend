import { notFound } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import ProductGrid from "./product-grid";
import instance from "@/lib/axios-interceptor";
import { Category } from "@/lib/services/types";
import { listCategories } from "@/lib/services/categories";

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

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

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

async function getCategoryData(slug: string): Promise<CategoryData | null> {
  try {
    const response = await instance.get<Category[]>("/api/categories");

    if (!response || !response.data) {
      console.error("Dữ liệu từ API không hợp lệ:", response);
      return null;
    }
    const category = response.data.find((cat) => cat.slug === slug);

    console.log("Danh mục tìm thấy:", category);

    return category
      ? { title: category.title, description: category.title, filters: [] }
      : null;
  } catch (error: any) {
    console.error("Lỗi khi gọi API:", error.message);
    return null;
  }
}


export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryData = await getCategoryData(params.slug);

  if (!categoryData) {
    notFound();
  }

  const allFilters = [...(categoryData.filters || []), ...commonFilters];

  return (
    <div>
      <div className="relative h-[400px] mt-10 bg-[url('http://localhost:9000/gold/Mat_day_chuyen_bac_nu_dinh_da_CZ_co_4_la_LILI_426865_30_996f012a63.jpg')] bg-contain bg-no-repeat bg-right">
        <div className="absolute inset-0 bg-[#F7F0E9]/60" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-start justify-center text-left text-black pl-16">
          <h1 className="text-4xl font-bold mb-4 hover:text-gray-700 transition duration-300">
            DÂY CHUYỀN CAO CẤP
          </h1>
          <hr className="w-96 border-gray-700 mb-4" />
          <p className="max-w-2xl hover:scale-105 transition duration-300">
            Dây chuyền LiLi mang đến cho bạn một vẻ đẹp hoàn hảo, góp phần tạo nên phong cách của riêng mình và là điểm nhấn nhá tuyệt vời mỗi khi bạn xuất hiện.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Featured Products */}
        <div className="mb-12">
          <h2 className="text-center font-medium mb-8 relative">
            <span className="bg-white px-4 relative z-10 text-2xl font-bold text-blue-600">SẢN PHẨM ĐỀ XUẤT</span>
            <div className="absolute left-0 right-0 h-px bg-gray-200 top-1/2 -z-[1]" />
          </h2>
          <ProductGrid />
        </div>

        <div className="mb-8">
          <h2 className="text-center font-semibold mb-8 relative">
            <span className="bg-white px-4 relative z-10 text-3xl font-bold text-gray-800 uppercase tracking-wide">
              {categoryData.title}
            </span>
            <div className="absolute left-0 right-0 h-px bg-gray-200 top-1/2 -z-[1]" />
          </h2>

          {/* Bộ lọc và tìm kiếm */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
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

        <ProductGrid />
      </div>
    </div>
  );
}