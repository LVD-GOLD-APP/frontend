import { NextResponse } from "next/server"

// This is a sample API route that would return product data
// In a real application, this would likely fetch from a database
export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const slug = params.slug

  // Sample data - in a real app, this would come from a database
  const productsData = {
    "lac-tay-bac-nu-dinh-pha-le-swarovski-trai-tim-cua-bien-lili-579467": {
      id: "579467",
      slug: "lac-tay-bac-nu-dinh-pha-le-swarovski-trai-tim-cua-bien-lili-579467",
      name: "Lắc Tay Bạc Nữ Đính Pha Lê Swarovski Trái Tim Của Biển LILI_579467",
      price: 1139000,
      description:
        "Sản phẩm được làm từ bạc 925 cao cấp được đính kèm viên pha lê của hãng đá quý nổi tiếng thế giới Swarovski đến từ nước Áo. Là một trong những mẫu lắc tay đẹp nhất, với thiết kế là lựa chọn hoàn hảo cho bạn trong những trang phục dự tiệc trang trọng. Bạn có muốn cùng nổi bật trang thành năng động chưa lòng ấy không nào?",
      note: "Lưu ý: Nếu bạn yêu cầu khắc tên, vui lòng ấn liên hệ (góc phải) để được hỗ trợ",
      color: "Xanh dương",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      category: {
        id: "vong-lac-tay-nu",
        name: "Vòng - Lắc tay nữ",
        slug: "vong-lac-tay-nu",
        parent: {
          id: "vong-lac-tay",
          name: "Vòng - Lắc tay",
          slug: "vong-tay",
          parent: {
            id: "vong-lac",
            name: "Vòng - Lắc",
            slug: "vong-tay",
          },
        },
      },
      relatedProducts: [
        {
          id: "295787",
          name: "Dây chuyền bạc nữ đính pha lê Swarovski trái tim đại dương LILI_295787",
          price: 979000,
          slug: "day-chuyen-bac-nu-dinh-pha-le-swarovski-trai-tim-dai-duong-lili-295787",
          color: "Xanh dương",
          image: "/placeholder.svg",
        },
        {
          id: "141382",
          name: "Bông tai bạc nữ đính đá Swarovski trái tim của biển LILI_141382",
          price: 762000,
          slug: "bong-tai-bac-nu-dinh-da-swarovski-trai-tim-cua-bien-lili-141382",
          color: "Xanh dương",
          image: "/placeholder.svg",
        },
      ],
    },
    "day-chuyen-bac-nu-dinh-pha-le-swarovski-trai-tim-dai-duong-lili-295787": {
      id: "295787",
      slug: "day-chuyen-bac-nu-dinh-pha-le-swarovski-trai-tim-dai-duong-lili-295787",
      name: "Dây chuyền bạc nữ đính pha lê Swarovski trái tim đại dương LILI_295787",
      price: 979000,
      description:
        "Sản phẩm được làm từ bạc 925 cao cấp được đính kèm viên pha lê của hãng đá quý nổi tiếng thế giới Swarovski đến từ nước Áo.",
      color: "Xanh dương",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      category: {
        id: "day-chuyen-nu",
        name: "Dây chuyền nữ",
        slug: "day-chuyen-nu",
        parent: {
          id: "day-chuyen",
          name: "Dây chuyền",
          slug: "day-chuyen",
        },
      },
      relatedProducts: [
        {
          id: "579467",
          name: "Lắc Tay Bạc Nữ Đính Pha Lê Swarovski Trái Tim Của Biển LILI_579467",
          price: 1139000,
          slug: "lac-tay-bac-nu-dinh-pha-le-swarovski-trai-tim-cua-bien-lili-579467",
          color: "Xanh dương",
          image: "/placeholder.svg",
        },
      ],
    },
  }

  // Check if the product exists
  if (!productsData[slug as keyof typeof productsData]) {
    return new NextResponse(null, { status: 404 })
  }

  // Return the product data
  return NextResponse.json(productsData[slug as keyof typeof productsData])
}

