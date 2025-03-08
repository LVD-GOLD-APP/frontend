"use client";
import VLogo from "@/assets/VLogo_LiLi_Horizontal.svg";
import { Button } from "@/components/ui/button";
import { useFetchData } from "@/lib/hooks/useFetchData";
import { Divider } from "@heroui/divider";
import { Clock4, Headset, Mail, MapPin, Medal, Package, Phone, Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { blogs } = useFetchData();

  const sections = [
    {
      title: "DỊCH VỤ KHÁCH HÀNG",
      links: blogs,
    },
    {
      title: "CẨM NANG SỬ DỤNG",
      links: [
        { title: "Tại sao nên chọn bạc cao cấp?", slug: "#" },
        { title: "Cách làm trắng bạc tại nhà", slug: "#" },
        { title: "Chính sách giao hàng", slug: "#" },
        { title: "Phân biệt các loại bạc S925, S999,...", slug: "#" },
        { title: "Những tác dụng của bạc", slug: "#" },
        { title: "Cách bảo quản trang sức bạc", slug: "#" },
      ],
    },
    {
      title: "THÔNG TIN CHUNG",
      links: [
        { title: "Tin trang sức", slug: "#" },
        { title: "Quyền lợi thành viên", slug: "#" },
        { title: "Tiếp thị liên kết LiLi", slug: "#" },
        { title: "Ưu đãi khi đánh giá", slug: "#" },
        { title: "Nhận quà tri ân", slug: "#" },
        { title: "Liên hệ", slug: "#" },
      ],
    },
    {
      title: "Ý KIẾN ĐÓNG GÓP",
      links: [
        {
          title: "LiLi luôn mong nhận được ý kiến đóng góp từ bạn để nâng cấp dịch vụ và sản phẩm tốt hơn.",
        },
        { title: "Nếu bạn có ý kiến, đừng ngần ngại đóng góp cho LiLi nhé. LiLi xin cảm ơn!" },
      ],
    },
  ];
  return (
    <footer className="border-t-1 border-[#C4001F] p-4">
      <div className="max-w-[1420px] mx-auto">
        <div className="grid grid-cols-1 gap-2 p-4 md:grid-cols-4 max-w-[1420px] mx-auto">
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <Smile size={48} strokeWidth={1} />
            <h3>KHÁCH HÀNG HÀI LÒNG</h3>
            <p className="text-center text-sm">
              Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ hành động
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <Medal size={48} strokeWidth={1} />
            <h3>CHẤT LƯỢNG CAO CẤP</h3>
            <p className="text-center text-sm">Mọi sản phẩm đều được thiết kế và chế tác bởi các nghệ nhân hàng đầu</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <Package size={48} strokeWidth={1} />
            <h3>ĐỔI TRẢ DỄ DÀNG</h3>
            <p className="text-center text-sm">
              10 ngày đổi trả (LiLi đến tận nơi nhận hàng). Hoàn tiền nếu không hài lòng
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <Headset size={48} strokeWidth={1} />
            <h3>HỖ TRỢ NHIỆT TÌNH</h3>
            <p className="text-center text-sm">
              Tất cả câu hỏi đều được các chuyên viên của LiLi tư vấn, giải đáp kỹ càng
            </p>
          </div>
        </div>
        <Divider className="my-8" />

        <div className="md:flex md:justify-between md:items-start">
          <div className="w-full md:w-1/3 hidden md:block">
            <Image className="w-48 mb-5" src={VLogo} alt="" />
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-3">
                <div className="size-5">
                  <Phone size={20} strokeWidth={1} />
                </div>
                <span className="text-xs">0368.860.660 (chính)</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="size-5">
                  <Phone size={20} strokeWidth={1} />
                </div>
                <span className="text-xs">0388.468.620 (phụ)</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="size-5">
                  <Mail size={20} strokeWidth={1} />
                </div>
                <span className="text-xs">Contact@lili.vn</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="size-5">
                  <MapPin size={20} strokeWidth={1} />
                </div>
                <span className="text-xs">Biển Hồ 10A, Vinhomes Ocean Park, Gia Lâm, Hà Nội</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="size-5">
                  <Clock4 size={20} strokeWidth={1} />
                </div>
                <span className="text-xs">Thứ 2 - CN : 8h00 - 24h00</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-x-2 gap-y-6 w-full md:w-2/3">
            {sections.map((item, index) => {
              return (
                <div className="w-full" key={index}>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <Divider className="my-2 w-1/2" />
                  <ul className="flex flex-col gap-1">
                    {item.links.map((blog, idx) => (
                      <li key={idx}>
                        {"slug" in blog ? (
                          <Link
                            href={`/blog/${blog.slug}`}
                            className="text-sm text-gray-700 transition-colors hover:text-red-500 hover:no-underline group"
                          >
                            {blog.title}
                          </Link>
                        ) : (
                          <span className="text-sm text-gray-500">{blog.title}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  {item.title === "Ý KIẾN ĐÓNG GÓP" && (
                    <div className="mt-4 w-full">
                      <Button variant="black" className="w-full text-center">
                        Gửi ý kiến
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <Divider className="my-4 shrink" />
          <p className="whitespace-nowrap">KẾT NỐI VỚI CHÚNG TÔI</p>
          <Divider className="my-4 shrink" />
        </div>

        <div className="flex w-full md:hidden">
          <div className="w-2/3">
            <Image className="w-48 mb-5" src={VLogo} alt="" />
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-3">
                <div className="size-5">
                  <Phone size={20} strokeWidth={1} />
                </div>
                <span className="text-xs">0368.860.660 (chính)</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="size-5">
                  <Phone size={20} strokeWidth={1} />
                </div>
                <span className="text-xs">0388.468.620 (phụ)</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="size-5">
                  <Mail size={20} strokeWidth={1} />
                </div>
                <span className="text-xs">Contact@lili.vn</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="size-5">
                  <MapPin size={20} strokeWidth={1} />
                </div>
                <span className="text-xs">Biển Hồ 10A, Vinhomes Ocean Park, Gia Lâm, Hà Nội</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="size-5">
                  <Clock4 size={20} strokeWidth={1} />
                </div>
                <span className="text-xs">Thứ 2 - CN : 8h00 - 24h00</span>
              </li>
            </ul>
          </div>
          <div className="w-1/3"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
