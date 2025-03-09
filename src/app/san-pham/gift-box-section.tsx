import { Gift } from "lucide-react";
import Image from "next/image";

export default function GiftBoxSection() {
  interface GiftCombo {
    id: number;
    title: string;
    image: {
      url: string;
    };
  }

  const giftCombo: GiftCombo[] = [];
  return (
    <section className="mb-8 border border-gray-100 rounded-md">
      <header className="bg-gray-100 p-2 rounded-t-md flex items-center gap-2 text-gray-800 font-medium">
        <Gift className="h-5 w-5 text-red-600" />
        <h3 className="uppercase">BỘ QUÀ CAO CẤP SỐ LƯỢNG CÓ HẠN</h3>
      </header>

      <div className="grid grid-cols-2 gap-2 p-2">
        {giftCombo.map(({ id, title, image }) => (
          <div key={id} className="flex items-center gap-3 p-3 border border-gray-200 rounded-md">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image src={image.url} alt={title} fill className="object-cover rounded-md" />
            </div>
            <p className="text-sm font-medium">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
