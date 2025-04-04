"use client";
import { Divider } from "@heroui/divider";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCardCustom from "./ProductCardCustom";
import { IProduct } from "@/lib/types/IProduct";

const ProductGrid = ({
  title,
  items,
  showViewAll = false,
  urlAll,
}: {
  title: string;
  items: IProduct[];
  showViewAll?: boolean;
  urlAll?: string;
}) => {
  return (
    <>
      <div className="flex items-center gap-2 max-w-[1420px] w-full mx-auto">
        <Divider className="my-4 shrink" />
        <p className="whitespace-nowrap text-xl">{title}</p>
        <Divider className="my-4 shrink" />
      </div>
      <div className="max-w-[1420px] mx-auto grid grid-cols-2 gap-4 p-4 text-sm md:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <ProductCardCustom key={item.id} item={item} />
        ))}
        {showViewAll && (
          <Button variant="black" className="col-span-full bg-white border border-black place-self-center">
            <Link href={urlAll || "/"} className="group">
              Xem tất cả {title.toLowerCase()}
            </Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default ProductGrid;
