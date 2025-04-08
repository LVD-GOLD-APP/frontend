"use client";
import VLogo from "@/assets/VLogo_LiLi_Horizontal.svg";
import SubFooter from "@/components/layout/SubFooter";
import { Button } from "@/components/ui/button";
import { mockFooterData } from "@/lib/services/mock-data";
import { IFooterData } from "@/lib/types/IFooter";
import { Divider } from "@heroui/divider";
import { Clock4, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterComponent = () => {
  // const { footerData } = useFooter();
  const footerData = mockFooterData;
  const pathname = usePathname();
  const isProductPage = pathname.startsWith("/san-pham/");

  const { contact_info, feedback_section, general_info, guides } = (footerData ?? {}) as IFooterData;

  const sections = [
    {
      title: contact_info?.title,
      links: contact_info?.links,
    },
    {
      title: guides?.title,
      links: guides?.links,
    },
    {
      title: general_info?.title,
      links: general_info?.links,
    },
    {
      title: feedback_section?.title,
      description: feedback_section?.description,
      button_text: feedback_section?.button_text,
    },
  ];

  return (
    <footer className={`border-t-1 border-[#C4001F] p-4 ${isProductPage ? "mb-24" : ""}`}>
      <div className="max-w-[1420px] mx-auto">
        <SubFooter />
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

          <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-x-2 gap-y-6 w-full md:w-3/4">
            {sections.map((item, index) => {
              return (
                <div className="w-full" key={index}>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <Divider className="my-2 w-1/2" />
                  <ul className="flex flex-col gap-1">
                    {item.links ? (
                      item?.links?.map((blog, idx) => (
                        <li key={idx}>
                          <Link
                            href={`${blog.url}`}
                            className="text-sm text-gray-700 transition-colors hover:text-red-500 hover:no-underline group"
                          >
                            {blog.label}
                          </Link>
                        </li>
                      ))
                    ) : (
                      <span className="text-sm text-gray-500">{item.description}</span>
                    )}
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

export default FooterComponent;
