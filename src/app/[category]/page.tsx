import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import ProductGrid from "./product-grid"

const categoryData = {
  "day-chuyen": {
    title: "DÂY CHUYỀN CAO CẤP",
    description:
      "Dây chuyền LILI mang đến cho bạn một vẻ đẹp hoàn hảo, góp phần tạo nên phong cách của riêng mình và là điểm nhấn nhẹ tuyệt vời mỗi khi bạn xuất hiện",
    filters: [
      {
        id: "type",
        name: "Loại dây chuyền",
        options: ["Nữ", "Nam", "Cặp đôi", "Trẻ em"],
      },
      {
        id: "material",
        name: "Chất liệu",
        options: ["Bạc", "Vàng", "Bạc mạ vàng"],
      },
    ],
  },
  "vong-lac": {
    title: "VÒNG - LẮC CAO CẤP",
    description: "Vòng và lắc LILI - Điểm nhấn tinh tế cho phong cách của bạn",
    filters: [
      {
        id: "type",
        name: "Loại vòng - lắc",
        options: ["Vòng tay", "Lắc tay", "Vòng cổ", "Lắc chân"],
      },
      {
        id: "material",
        name: "Chất liệu",
        options: ["Bạc", "Vàng", "Bạc mạ vàng"],
      },
    ],
  },
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
]

const sortOptions = [
  { label: "Giá: từ thấp đến cao", value: "price-asc" },
  { label: "Giá: từ cao đến thấp", value: "price-desc" },
  { label: "Số lượt mua", value: "purchases" },
  { label: "Số lượt đánh giá", value: "reviews" },
  { label: "Số sao trung bình", value: "rating" },
  { label: "Mới nhất", value: "newest" },
  { label: "Tên sản phẩm", value: "name" },
]

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categoryData[params.category as keyof typeof categoryData]

  if (!category) {
    return <div>Danh mục không tồn tại</div>
  }

  const allFilters = [...(category.filters || []), ...commonFilters]

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] bg-[url('/placeholder.svg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
          <p className="max-w-2xl">{category.description}</p>
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
            <span className="bg-white px-4 relative z-10">{category.title}</span>
            <div className="absolute left-0 right-0 h-px bg-gray-200 top-1/2 -z-[1]" />
          </h2>

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

        <ProductGrid />
      </div>
    </div>
  )
}

