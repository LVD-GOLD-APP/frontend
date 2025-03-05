import { Gift } from "lucide-react";
import Image from "next/image";

const giftBoxes = [
  {
    id: 1,
    title: "Bộ đóng gói cao cấp, ý nghĩa",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    title: "Hộp đựng trang sức bọc da Royal",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    title: "Hộp đựng đa trang sức bọc nhung",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    title: "Món quà bí mật đặc biệt Mystery",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function GiftBoxSection() {
  return (
    <section className="mb-8 border border-gray-100 rounded-md">
      <header className="bg-gray-100 p-2 rounded-t-md flex items-center gap-2 text-gray-800 font-medium">
        <Gift className="h-5 w-5 text-red-600" />
        <h3 className="uppercase">BỘ QUÀ CAO CẤP SỐ LƯỢNG CÓ HẠN</h3>
      </header>

      <div className="grid grid-cols-2 gap-2 p-2">
        {giftBoxes.map(({ id, title, image }) => (
          <div key={id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-md">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image src={image} alt={title} fill className="object-cover rounded-md" />
            </div>
            <p className="text-sm font-medium">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
