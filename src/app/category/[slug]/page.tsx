import { CategoryBanner } from "@/components/category-banner";
import { ProductCard } from "@/components/product-card";
import { ProductFilter } from "@/components/product-filter";
import { SectionTitle } from "@/components/ui/section-title";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DrawerFilter } from "./DrawerFilter";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Trong thực tế, bạn sẽ lấy dữ liệu danh mục từ API dựa vào params.category
  // Đây là dữ liệu mẫu cho danh mục "bong-tai"
  const categories = {
    "bong-tai": {
      id: "bong-tai",
      name: "BÔNG TAI CAO CẤP",
      description:
        "Cùng khám phá bộ sưu tập khuyên tai LiLi đẹp cao cấp mang sự cuốn hút và nổi bật đến cho bạn. Với sự tỉ mỉ trong từng đường nét thiết kế, bạn sẽ trở nên thật hoàn hảo đấy!",
      bannerImage: "/placeholder.svg?height=400&width=1200",
      products: [
        {
          id: "LILI_123456",
          name: "Bông tai bạc nữ đính đá xanh dương",
          price: 850000,
          image: "/placeholder.svg?height=400&width=400",
          slug: "bong-tai-bac-nu-dinh-da-xanh-duong-lili_123456",
        },
        {
          id: "LILI_234567",
          name: "Bông tai bạc nữ đính đá kim cương Moissanite",
          price: 1250000,
          image: "/placeholder.svg?height=400&width=400",
          slug: "bong-tai-bac-nu-dinh-da-kim-cuong-moissanite-lili_234567",
        },
        {
          id: "LILI_345678",
          name: "Bông tai bạc nữ đính đá xanh biển",
          price: 950000,
          image: "/placeholder.svg?height=400&width=400",
          slug: "bong-tai-bac-nu-dinh-da-xanh-bien-lili_345678",
        },
        {
          id: "LILI_456789",
          name: "Bông tai bạc nữ hoa mai đính đá trắng",
          price: 1050000,
          image: "/placeholder.svg?height=400&width=400",
          slug: "bong-tai-bac-nu-hoa-mai-dinh-da-trang-lili_456789",
        },
        {
          id: "LILI_567890",
          name: "Bông tai bạc nữ đính đá trắng hình trái tim",
          price: 1150000,
          image: "/placeholder.svg?height=400&width=400",
          slug: "bong-tai-bac-nu-dinh-da-trang-hinh-trai-tim-lili_567890",
        },
        {
          id: "LILI_678901",
          name: "Bông tai bạc nữ đính đá hồng phấn",
          price: 950000,
          image: "/placeholder.svg?height=400&width=400",
          slug: "bong-tai-bac-nu-dinh-da-hong-phan-lili_678901",
        },
        {
          id: "LILI_789012",
          name: "Bông tai bạc nữ đính đá tím lavender",
          price: 1050000,
          image: "/placeholder.svg?height=400&width=400",
          slug: "bong-tai-bac-nu-dinh-da-tim-lavender-lili_789012",
        },
        {
          id: "LILI_890123",
          name: "Bông tai bạc nữ đính đá xanh lá",
          price: 950000,
          image: "/placeholder.svg?height=400&width=400",
          slug: "bong-tai-bac-nu-dinh-da-xanh-la-lili_890123",
        },
      ],
    },
    "vong-lac": {
      id: "vong-lac",
      name: "VÒNG - LẮC CAO CẤP",
      description:
        "Tô điểm cho đôi tay, đôi chân của bạn bằng những chiếc lắc tay, vòng chân LiLi đẹp tinh xảo, góp phần tăng thêm nét sang trọng và thanh lịch cho mỗi bước đi của bạn",
      bannerImage: "/placeholder.svg?height=400&width=1200",
      products: [
        {
          id: "LILI_123456",
          name: "Bông tai bạc nữ đính đá xanh dương",
          price: 850000,
          image: "/placeholder.svg?height=400&width=400",
          slug: "bong-tai-bac-nu-dinh-da-xanh-duong-lili_123456",
        },
      ],
    },
    nhan: {
      id: "nhan",
      name: "NHẪN CAO CẤP",
      description:
        "Hãy thể hiện sự cuốn hút của bạn với những chiếc nhẫn LiLi đẹp cao cấp đầy quyến rũ. Bạn đã sẵn sàng để tỏa sáng và thu hút mọi ánh nhìn cùng em nó chưa nào!",
      bannerImage: "/placeholder.svg?height=400&width=1200",
      products: [
        {
          id: "LILI_123456",
          name: "Bông tai bạc nữ đính đá xanh dương",
          price: 850000,
          image: "/placeholder.svg?height=400&width=400",
          slug: "bong-tai-bac-nu-dinh-da-xanh-duong-lili_123456",
        },
      ],
    },
    "day-chuyen": {
      id: "day-chuyen",
      name: "DÂY CHUYỀN CAO CẤP",
      description:
        "Dây chuyền LiLi mang đến cho bạn một vẻ đẹp hoàn hảo, góp phần tạo nên phong cách của riêng mình và là điểm nhấn nhá tuyệt vời mỗi khi bạn xuất hiện",
      bannerImage: "/placeholder.svg?height=400&width=1200",
      products: [
        {
          id: "LILI_123456",
          name: "Bông tai bạc nữ đính đá xanh dương",
          price: 850000,
          image: "/placeholder.svg?height=400&width=400",
          slug: "bong-tai-bac-nu-dinh-da-xanh-duong-lili_123456",
        },
      ],
    },
    "khuyen-xo": {
      id: "khuyen-xo",
      name: "KHUYÊN XỎ CAO CẤP",
      description:
        "Cũng khám phá bộ sưu tập khuyên xỏ LiLi đẹp cao cấp với thiết kế vô cùng phù hợp với những bạn cá tính. Em nó khi kết hợp với bạn chắc chắn sẽ khiến bạn vô cùng đặc biệt đấy!",
      bannerImage: "/placeholder.svg?height=400&width=1200",
      products: [
        {
          id: "LILI_123456",
          name: "Bông tai bạc nữ đính đá xanh dương",
          price: 850000,
          image: "/placeholder.svg?height=400&width=400",
          slug: "bong-tai-bac-nu-dinh-da-xanh-duong-lili_123456",
        },
      ],
    },
    "vong-charm-pandora-hat-charm-bac": {
      id: "vong-charm-pandora-hat-charm-bac",
      name: "VÒNG - LẮC CAO CẤP",
      description:
        "Tô điểm cho đôi tay của bạn bằng những chiếc vòng pandora, hạt charm LiLi đẹp tinh xảo, góp phần tăng thêm nét sang trọng và thanh lịch cho mỗi bước đi của bạn",
      bannerImage: "/placeholder.svg?height=400&width=1200",
      products: [
        {
          id: "LILI_123456",
          name: "Bông tai bạc nữ đính đá xanh dương",
          price: 850000,
          image: "/placeholder.svg?height=400&width=400",
          slug: "bong-tai-bac-nu-dinh-da-xanh-duong-lili_123456",
        },
      ],
    },
  };

  const category = categories[params.slug as keyof typeof categories];

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen mx-auto py-6 pb-20">
      {/* Breadcrumb */}
      <div className="container mx-auto pl-3">
        <nav className="flex items-center text-sm mb-6 text-gray-600 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <Link href="/" className="flex items-center shrink-0">
            <Home className="h-4 w-4 mr-1" />
            Trang chủ
          </Link>
          <Link href="/vong-tay" className="flex items-center shrink-0">
            <ChevronRight className="h-4 w-4 mx-1" />
            Bông tai
          </Link>
        </nav>
      </div>
      {/* Category Banner */}
      <CategoryBanner title={category.name} description={category.description} image={category.bannerImage} />

      <div className="container mx-auto">
        {/* Suggested Products */}
        <div className="container mx-auto px-4 py-12">
          <SectionTitle title="SẢN PHẨM ĐỀ XUẤT" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
            {category.products.slice(0, 8).map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                slug={product.slug}
              />
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="container mx-auto px-4 py-12">
          <SectionTitle title="BÔNG - KHUYÊN TAI" />
          {/* Bộ lọc - Hiển thị theo hàng ngang */}
          <div className="hidden lg:flex flex-col md:flex-row items-center justify-between gap-4 mb-6 border-b pb-4">
            <ProductFilter />
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sắp xếp theo:</span>
              <select className="text-sm border rounded-md px-2 py-1">
                <option>Mới nhất</option>
                <option>Giá: Thấp đến cao</option>
                <option>Giá: Cao đến thấp</option>
                <option>Bán chạy nhất</option>
              </select>
            </div>
          </div>
          {/* Bộ lọc - Hiển thị mobile */}
          <div className="container mx-auto w-full pb-4">
            <DrawerFilter />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                slug={product.slug}
              />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="flex items-center gap-1">
            <button className="w-10 h-10 border rounded-md flex items-center justify-center hover:bg-gray-50">
              &lt;
            </button>
            <button className="w-10 h-10 border rounded-md flex items-center justify-center bg-primary text-white">
              1
            </button>
            <button className="w-10 h-10 border rounded-md flex items-center justify-center hover:bg-gray-50">2</button>
            <button className="w-10 h-10 border rounded-md flex items-center justify-center hover:bg-gray-50">3</button>
            <button className="w-10 h-10 border rounded-md flex items-center justify-center hover:bg-gray-50">
              &gt;
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
