import Image from "next/image";

const gifts = [
  {
    id: 1,
    name: "Thiệp Quà Tặng Ý Nghĩa",
    image: "/src/assets/Lac-tay-bac-nu-ma-bach-kim-dinh-pha-le-co-bon-la-LILI_612672_34.jpg",
    description:
      "1 tấm thiệp nhỏ xinh chứa đựng những câu chúc chân thành sẽ giúp món quà tặng của bạn thêm phần ý nghĩa hơn rất nhiều đấy!",
    priceOld: "98.000₫",
    priceNew: "82.000₫",
  },
  {
    id: 2,
    name: "Gấu Bông Quà Tặng LiLi",
    image: "/src/assets/Lac-tay-bac-nu-ma-bach-kim-dinh-pha-le-co-bon-la-LILI_612672_34.jpg",
    description:
      "Gấu bông là 1 phần không thể thiếu trong mỗi món quà bạn trao tặng cho người thân yêu hoặc chính bản thân mình.",
    priceOld: "98.000₫",
    priceNew: "82.000₫",
  },
  {
    id: 3,
    name: "Bộ Vệ Sinh Trang Sức Bạc Cao Cấp Nhập Khẩu Mỹ",
    image: "/src/assets/Lac-tay-bac-nu-ma-bach-kim-dinh-pha-le-co-bon-la-LILI_612672_34.jpg",
    description:
      "Bạn sẽ không phải lo món trang sức bạc bị đen nữa. Bộ dụng cụ gồm nước rửa Connoisseurs từ Mỹ, khăn lau, que đánh bạc cao cấp sẽ làm sáng bóng trang sức của bạn.",
    priceOld: "619.000₫",
    priceNew: "384.000₫",
  },
];

export default function GiftOptions() {
  return (
    <div className="space-y-4 my-2">
      {gifts.map((gift) => (
        <div key={gift.id} className="flex items-start border border-dashed border-gray-300 rounded p-3 gap-3">
          <Image
            src={gift.image}
            alt={gift.name}
            className="w-24 h-24 object-contain rounded"
            width={100}
            height={100}
          />
          <div className="flex-1 space-y-1">
            <h3 className="font-semibold text-gray-900">{gift.name}</h3>
            <p className="text-sm text-gray-600">{gift.description}</p>
            <div className="flex items-center justify-between pt-1">
              <div className="text-sm space-x-2">
                <span className="line-through text-gray-400">{gift.priceOld}</span>
                <span className="text-red-600 font-semibold">{gift.priceNew}</span>
              </div>
              <button className="bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded hover:bg-red-700 transition">
                THÊM NGAY
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
