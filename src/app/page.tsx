
import { SliderBanner } from "@/components/layout/SliderBanner";
import { Divider } from "@heroui/divider";
import { Gift, Handshake, IdCard, ThumbsUp } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-[34rem] md:h-[40rem]">
        <SliderBanner />
      </div>
      <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4 max-w-[1420px] mx-auto">
        <div className="flex flex-col items-center border rounded-2xl p-1 aspect-square gap-2 md:aspect-video">
          <IdCard size={42} strokeWidth={1} />
          <h3 className="text-xs font-bold">Ưu đãi thành viên</h3>
          <p className="text-center text-sm">Thành viên sẽ nhận được hộp trang sức trị giá 224.000đ và xu tích lũy,...</p>
        </div>

        <div className="flex flex-col items-center border rounded-2xl p-1 aspect-square gap-2 md:aspect-video">
          <ThumbsUp size={42} strokeWidth={1} />
          <h3 className="text-xs font-bold">ĐÁNH GIÁ TỪ GOOGLE</h3>
          <p className="text-center text-sm">5/5 sao theo đánh giá của khách hàng đã mua hàng của LiLi trên Google</p>
        </div>

        <div className="flex flex-col items-center border rounded-2xl p-1 aspect-square gap-2 md:aspect-video">
          <Gift size={42} strokeWidth={1} />
          <h3 className="text-xs font-bold">QUÀ TẶNG MIỄN PHÍ</h3>
          <p className="text-center text-sm">Bạn sẽ nhận được nhiều quà tặng hấp dẫn miễn phí cho đơn hàng bất kỳ</p>
        </div>

        <div className="flex flex-col items-center border rounded-2xl p-1 aspect-square gap-2 md:aspect-video">
          <Handshake size={42} strokeWidth={1} />
          <h3 className="text-xs font-bold">ƯU ĐÃI AFFILIATE</h3>
          <p className="text-center text-sm">Tham gia để nhận hoa hồng lên đến 17,5% giá trị đơn hàng và nhiều ưu đãi</p>
        </div>
      </div>
      <div className="flex items-center gap-2 max-w-[1420px] w-full mx-auto">
        <Divider className="my-4" />
        <p className="whitespace-nowrap text-xl">XU HƯỚNG TÌM KIẾM</p>
        <Divider className="my-4" />
      </div>
    </>
  );
}
