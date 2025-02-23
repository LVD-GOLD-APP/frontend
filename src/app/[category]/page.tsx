import Image from "next/image";
import SanPhamMoiNhatPc from "@/assets/Banner-San-pham-moi-nhat-PC.jpg";
import BoTrangSuc from "@/assets/Bo-trang-suc-bac-dinh-da-pha-le-hinh-trai-tim-LILI_941338-10.jpg";

export default function Page({ params }: { params: { category: string } }) {
  const suggestedProducts = [
    { id: 1, name: "Sản phẩm 1", imageUrl: BoTrangSuc },
    { id: 2, name: "Sản phẩm 2", imageUrl: BoTrangSuc },
    { id: 3, name: "Sản phẩm 3", imageUrl: BoTrangSuc },
    { id: 4, name: "Sản phẩm 4", imageUrl: BoTrangSuc },
    { id: 5, name: "Sản phẩm 4", imageUrl: BoTrangSuc },
    { id: 6, name: "Sản phẩm 4", imageUrl: BoTrangSuc },
    { id: 7, name: "Sản phẩm 4", imageUrl: BoTrangSuc },
    { id: 8, name: "Sản phẩm 4", imageUrl: BoTrangSuc },
  ];

  return (
    <div>
      <h1>
        Trang chủ {">"} {params.category}
      </h1>

      <div>
        <Image
          src={SanPhamMoiNhatPc}
          className="h-full"
          alt={params.category}
        />

        <div className="flex items-center justify-center mt-4 relative">
          <div className="absolute left-0 w-full max-w-xs bg-white h-px"></div>
          <h1 className="text-2xl font-bold px-4 mx-4">SẢN PHẨM ĐỀ XUẤT</h1>
          <div className="absolute right-0 w-full max-w-xs bg-white h-px"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 p-4">
          {suggestedProducts.slice(0, 12).map((product, index) => (
            <div
              key={product.id}
              className="flex flex-col items-center border rounded-2xl w-80 h-100 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-60 overflow-hidden relative">
                <Image
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-opacity duration-300 ease-in-out hover:opacity-0"
                />
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100"
                />
              </div>
              <h4 className="text-center text-sm sm:text-base md:text-lg font-medium p-4">
                {product.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
