import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/utils"
import { ProductGallery } from "@/components/product-gallery"
import { RelatedProducts } from "@/components/related-products"
import { Input } from "@/components/ui/input";

interface PageProps {
    params: {
        slug: string
    }
}

export default function ProductPage({ params }: PageProps) {
    // Trong thực tế, bạn sẽ lấy dữ liệu sản phẩm từ API dựa vào slug
    // Đây là dữ liệu mẫu cho sản phẩm "Dây chuyền bạc nữ đính pha lê Swarovski trái tim dại dương"
    const product = {
        id: "LILI_295787",
        name: "Dây Chuyền Bạc Nữ Đính Pha Lê Swarovski Trái Tim Dại Dương",
        slug: "day-chuyen-bac-nu-dinh-pha-le-swarovski-trai-tim-dai-duong-lili_295787",
        price: 979000,
        originalPrice: 1200000,
        discount: 224000,
        description: `Dây chuyền bạc mặt pha lê Swarovski trái tim dại dương LILI_295787 là một thiết kế vô cùng sang trọng và hấp dẫn đến từ trang sức LILI. Hãy tưởng tượng viên pha lê đính trên dây chuyền bạc này sáng lấp lánh trên khuôn cổ của bạn, sẽ thật tuyệt vời đúng không nào. Món trang sức này sẽ giúp bạn thêm đẳng yêu và thu hút đó. Em nó được làm từ bạc 92.5% nguyên chất, mặt pha lê Swarovski cao cấp nhập khẩu với các tùy chọn màu sắc khác nhau. Cùng em nó ra ngoài và tỏa sáng thôi nào !!`,
        images: [
            "/placeholder.svg?height=600&width=600",
            "/placeholder.svg?height=600&width=600",
            "/placeholder.svg?height=600&width=600",
            "/placeholder.svg?height=600&width=600",
        ],
        colors: [
            { name: "Hồng", value: "pink" },
            { name: "Tím", value: "purple" },
            { name: "Xanh", value: "blue" },
            { name: "Xanh lá", value: "green" },
        ],
        relatedProducts: [
            {
                id: "LILI_831944",
                name: "Dây chuyền bạc nữ đính đá CZ cá tiên",
                price: 1023000,
                image: "/placeholder.svg?height=200&width=200",
                slug: "day-chuyen-bac-nu-dinh-da-cz-ca-tien-lili_831944",
            },
            {
                id: "LILI_528145",
                name: "Dây chuyền đôi bạc tình yêu tình bạn thân BFF",
                price: 2098000,
                image: "/placeholder.svg?height=200&width=200",
                slug: "day-chuyen-doi-bac-tinh-yeu-tinh-ban-than-bff-dinh-da-cz-forever-love-lili_528145",
            },
        ],
    }

    if (!product) {
        notFound()
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Gallery */}
                <ProductGallery images={product.images} />

                {/* Product Info */}
                <div className="space-y-6">
                    <h1 className="text-2xl font-bold">{product.name}</h1>

                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-red-600">{formatCurrency(product.price)}</span>
                        {product.originalPrice && (
                            <span className="text-gray-500 line-through">{formatCurrency(product.originalPrice)}</span>
                        )}
                    </div>

                    <div className="prose prose-sm">
                        <p>{product.description}</p>
                        <p className="text-yellow-600 font-medium">
                            Lưu ý: Nếu bạn yêu cầu khắc tên, vui lòng ấn liên hệ (góc phải) để được hỗ trợ
                        </p>
                    </div>

                    {/* Color Selection */}
                    <div>
                        <h3 className="font-medium mb-2">Màu Sắc</h3>
                        <div className="flex gap-2">
                            {product.colors.map((color) => (
                                <button
                                    key={color.value}
                                    className="w-8 h-8 rounded-full border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
                                    style={{
                                        backgroundColor:
                                            color.value === "pink"
                                                ? "#ec4899"
                                                : color.value === "purple"
                                                    ? "#a855f7"
                                                    : color.value === "blue"
                                                        ? "#3b82f6"
                                                        : color.value === "green"
                                                            ? "#22c55e"
                                                            : color.value,
                                    }}
                                    aria-label={`Màu ${color.name}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center">
                            <Button variant="outline" size="icon" className="h-10 w-10 rounded-r-none">
                                -
                            </Button>
                            <Input type="number" min="1" defaultValue="1" className="h-10 w-16 text-center rounded-none" />
                            <Button variant="outline" size="icon" className="h-10 w-10 rounded-l-none">
                                +
                            </Button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-red-600 hover:bg-red-700 text-white">MUA NGAY</Button>
                        <Button variant="outline">GỌI TƯ VẤN MIỄN PHÍ</Button>
                    </div>

                    {/* Registration Promotion */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary"
                            >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span className="font-medium">Đăng Ký</span>
                        </div>
                        <p className="text-sm mt-2">để nhận ngay hộp trang sức trị giá 224.000đ + tích lũy, giảm giá,...</p>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-16">
                <h2 className="text-xl font-bold mb-6">Bộ Sản Phẩm Thường Được Chọn Cùng</h2>
                <RelatedProducts products={product.relatedProducts} />
            </div>
        </div>
    )
}

