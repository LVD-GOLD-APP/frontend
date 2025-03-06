import { Gift } from "lucide-react";
import Image from "next/image";
import AnhHop from "@/assets/Anh-hop-san-pham-LiLi-Final.jpg";
import HopDung from "@/assets/Hop-dung-trang-suc-boc-da-vuong-mien-Royal-LILI_719713_1.jpg";
import DaDung from "@/assets/Hop-dung-do-trang-suc-mini-nam-nu-trang-boc-da-Zelda-LILI_878639_10.jpg";
import HopQua from "@/assets/Qua-tang-bi-mat-dac-biet-5-150x150.png";

const giftBoxes = [
  {
    id: 1,
    title: "Bộ đóng gói cao cấp, ý nghĩa",
    image:  AnhHop,
  },
  {
    id: 2,
    title: "Hộp đựng trang sức bọc da Royal",
    image: HopDung,
  },
  {
    id: 3,
    title: "Hộp đựng đa trang sức bọc nhung",
    image: DaDung,
  },
  {
    id: 4,
    title: "Món quà bí mật đặc biệt Mystery",
    image: HopQua,
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
