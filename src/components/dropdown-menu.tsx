import { MenuItem } from "@/lib/api/menu";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Divider } from "@heroui/divider";
import Image from "next/image";

interface DropdownMenuProps {
  title: string;
  url?: string;
  image?: string;
  items?: MenuItem[];
}

const DropdownMenu = ({ title, url = "", image, items }: DropdownMenuProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasItems = items && items.length > 0;

  return (
    <div
      className="duration-100 rounded-md text-center relative"
      onMouseEnter={() => hasItems && setIsHovered(true)}
      onMouseLeave={() => hasItems && setIsHovered(false)}
    >
      <Link href={url} className={`block truncate text-[14px] pt-4 pb-2 px-4 ${isHovered && "text-red-500"}`}>
        {title}
      </Link>

      {hasItems && isHovered && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed left-0 w-full bg-white shadow-md z-50 border-b border-t border-[#C4001F] overflow-hidden"
        >
          <div className="max-w-[1420px] mx-auto flex gap-10 p-3 h-fit">
            {items?.map(({ name, items }) => (
              <div key={name} className="flex flex-col items-start w-full h-fit">
                <h2 className="mt-3 mb-2 font-bold truncate">{name}</h2>
                <Divider />
                {items?.map(({ name, url }, idx) => (
                  <Link key={idx} href={url} className="my-2 block hover:text-blue-500">
                    {name}
                  </Link>
                ))}
              </div>
            ))}
            {image && (
              <div className="h-fit">
                <Image src={`/${image}`} alt="" width={200} height={200} />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DropdownMenu;
