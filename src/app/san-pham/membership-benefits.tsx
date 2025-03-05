import { Gift, Handshake, IdCard, ThumbsUp } from "lucide-react";

export default function MembershipBenefits() {
  return (
    <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4 max-w-[1420px] mx-auto">
      {[
        {
          icon: <IdCard size={42} strokeWidth={1} />,
          title: "Ưu đãi thành viên",
          desc: "Thành viên sẽ nhận được hộp trang sức trị giá 224.000đ và xu tích lũy,...",
        },
        {
          icon: <ThumbsUp size={42} strokeWidth={1} />,
          title: "ĐÁNH GIÁ TỪ GOOGLE",
          desc: "5/5 sao theo đánh giá của khách hàng đã mua hàng của LiLi trên Google",
        },
        {
          icon: <Gift size={42} strokeWidth={1} />,
          title: "QUÀ TẶNG MIỄN PHÍ",
          desc: "Bạn sẽ nhận được nhiều quà tặng hấp dẫn miễn phí cho đơn hàng bất kỳ",
        },
        {
          icon: <Handshake size={42} strokeWidth={1} />,
          title: "ƯU ĐÃI AFFILIATE",
          desc: "Tham gia để nhận hoa hồng lên đến 17,5% giá trị đơn hàng và nhiều ưu đãi",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group flex flex-col items-center border rounded-2xl p-3 gap-2 w-full h-full transition-colors hover:border-red-500 cursor-pointer"
        >
          {item.icon}
          <h3 className="text-xs font-bold">{item.title}</h3>
          <p className="text-center text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
