
import { SliderBanner } from "@/components/layout/SliderBanner";
import { Divider } from "@heroui/divider";
import { Gift, Handshake, IdCard, ThumbsUp } from "lucide-react";
import LacTay from "@/assets/Lac-tay-cap-doi-bac-dinh-da-CZ-trai-tim-cua-bien-Erasmus-LILI_199377_3-400x400.jpg"
import VeChungToi from "@/assets/Ve-chung-toi-banner_1f.jpg"

import Image from "next/image";
import { Button } from "@/components/ui/button";

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
        <Divider className="my-4 shrink" />
        <p className="whitespace-nowrap text-xl">XU HƯỚNG TÌM KIẾM</p>
        <Divider className="my-4 shrink" />
      </div>
      <div className="max-w-[1420px] mx-auto grid grid-cols-2 gap-4 p-4 md:grid-cols-3 xl:grid-cols-6">
        <div className="flex flex-col items-center gap-4">
          <Image src={LacTay} className="aspect-square rounded-xl" alt="" />
          <span>Vòng - Lắc</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={LacTay} className="aspect-square rounded-xl" alt="" />
          <span>Vòng - Lắc</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={LacTay} className="aspect-square rounded-xl" alt="" />
          <span>Vòng - Lắc</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={LacTay} className="aspect-square rounded-xl" alt="" />
          <span>Vòng - Lắc</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={LacTay} className="aspect-square rounded-xl" alt="" />
          <span>Vòng - Lắc</span>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src={LacTay} className="aspect-square rounded-xl" alt="" />
          <span>Vòng - Lắc</span>
        </div>
      </div>
      <div className="flex items-center gap-2 max-w-[1420px] w-full mx-auto">
        <Divider className="my-4 shrink" />
        <p className="whitespace-nowrap text-xl">SẢN PHẨM YÊU THÍCH NHẤT</p>
        <Divider className="my-4 shrink" />
      </div>
      <div className="max-w-[1420px] mx-auto grid grid-cols-2 gap-4 p-4 text-sm md:grid-cols-3 xl:grid-cols-4">
        <div className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2">
          <Image src={LacTay} className="aspect-square rounded-t-xl" alt="" />
          <span className="line-clamp-2 text-center md:px-2">Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944</span>
          <span className="text-[#c60018] font-semibold">817.000 đ</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2">
          <Image src={LacTay} className="aspect-square rounded-t-xl" alt="" />
          <span className="line-clamp-2 text-center md:px-2">Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944</span>
          <span className="text-[#c60018] font-semibold">817.000 đ</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2">
          <Image src={LacTay} className="aspect-square rounded-t-xl" alt="" />
          <span className="line-clamp-2 text-center md:px-2">Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944</span>
          <span className="text-[#c60018] font-semibold">817.000 đ</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2">
          <Image src={LacTay} className="aspect-square rounded-t-xl" alt="" />
          <span className="line-clamp-2 text-center md:px-2">Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944</span>
          <span className="text-[#c60018] font-semibold">817.000 đ</span>
        </div>
        <Button variant="outline" className="col-span-full bg-white border border-black place-self-center">
          Xem tất cả sản phẩm yêu thích nhất
        </Button>
      </div>
      <div className="flex items-center gap-2 max-w-[1420px] w-full mx-auto">
        <Divider className="my-4 shrink" />
        <p className="whitespace-nowrap text-xl">SẢN PHẨM MỚI</p>
        <Divider className="my-4 shrink" />
      </div>
      <div className="max-w-[1420px] mx-auto grid grid-cols-2 gap-4 p-4 text-sm md:grid-cols-3 xl:grid-cols-4">
        <div className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2">
          <Image src={LacTay} className="aspect-square rounded-t-xl" alt="" />
          <span className="line-clamp-2 text-center md:px-2">Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944</span>
          <span className="text-[#c60018] font-semibold">817.000 đ</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2">
          <Image src={LacTay} className="aspect-square rounded-t-xl" alt="" />
          <span className="line-clamp-2 text-center md:px-2">Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944</span>
          <span className="text-[#c60018] font-semibold">817.000 đ</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2">
          <Image src={LacTay} className="aspect-square rounded-t-xl" alt="" />
          <span className="line-clamp-2 text-center md:px-2">Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944</span>
          <span className="text-[#c60018] font-semibold">817.000 đ</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2">
          <Image src={LacTay} className="aspect-square rounded-t-xl" alt="" />
          <span className="line-clamp-2 text-center md:px-2">Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944</span>
          <span className="text-[#c60018] font-semibold">817.000 đ</span>
        </div>
        <Button variant="outline" className="col-span-full bg-white border border-black place-self-center">
          Xem tất cả sản phẩm mới
        </Button>
      </div>
      <div className="flex items-center gap-2 max-w-[1420px] w-full mx-auto">
        <Divider className="my-4 shrink" />
        <p className="whitespace-nowrap text-xl">SẢN PHẨM KHUYẾN MÃI</p>
        <Divider className="my-4 shrink" />
      </div>
      <div className="max-w-[1420px] mx-auto grid grid-cols-2 gap-4 p-4 text-sm md:grid-cols-3 xl:grid-cols-4">
        <div className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2">
          <Image src={LacTay} className="aspect-square rounded-t-xl" alt="" />
          <span className="line-clamp-2 text-center md:px-2">Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944</span>
          <span className="text-[#c60018] font-semibold">817.000 đ</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2">
          <Image src={LacTay} className="aspect-square rounded-t-xl" alt="" />
          <span className="line-clamp-2 text-center md:px-2">Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944</span>
          <span className="text-[#c60018] font-semibold">817.000 đ</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2">
          <Image src={LacTay} className="aspect-square rounded-t-xl" alt="" />
          <span className="line-clamp-2 text-center md:px-2">Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944</span>
          <span className="text-[#c60018] font-semibold">817.000 đ</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-xl bg-[#F3F3F3] pb-2">
          <Image src={LacTay} className="aspect-square rounded-t-xl" alt="" />
          <span className="line-clamp-2 text-center md:px-2">Dây chuyền bạc nữ đính đá CZ cá tiên LILI_831944</span>
          <span className="text-[#c60018] font-semibold">817.000 đ</span>
        </div>
        <Button variant="outline" className="col-span-full bg-white border border-black place-self-center">
          Xem tất cả sản phẩm khuyến mãi
        </Button>
      </div>
      <div className="size-full flex flex-col justify-center gap-4 p-4" style={{ backgroundImage: `url(${VeChungToi.src})` }}>
        <h2 className="text-2xl text-center font-medium">LiLi - Premium Jewelry  - Trang Sức Cao Cấp</h2>
        <p className="text-center">Đến với LiLi, trang sức không chỉ là một phụ kiện – đó là hiện thân của niềm đam mê, tình yêu của chúng tôi, và cuối cùng, là món quà của LiLi dành cho bạn</p>
        <Button variant="outline" className="col-span-full bg-white border border-black place-self-center">
          Về chúng tôi
        </Button>
      </div>
    </>
  );
}
