import { NextResponse } from "next/server"

// This is a sample API route that would return category data
// In a real application, this would likely fetch from a database
export async function GET(request: Request, { params }: { params: { categoryId: string } }) {
  const categoryId = params.categoryId

  // Sample data - in a real app, this would come from a database
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

  // Check if the category exists
  if (!categoryData[categoryId as keyof typeof categoryData]) {
    return new NextResponse(null, { status: 404 })
  }

  // Return the category data
  return NextResponse.json(categoryData[categoryId as keyof typeof categoryData])
}

