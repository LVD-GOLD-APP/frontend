"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Sheet, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    isGift?: boolean;
    isLimited?: boolean;
};

export function CartDrawer({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    const router = useRouter();
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 1,
            name: "Lắc tay bạc nữ đính pha lê Swarovski trái tim của biển LILI_579467 - Hồng",
            price: 1139000,
            quantity: 9,
            image: "/placeholder.svg?height=80&width=80",
        },
        {
            id: 2,
            name: "Quà Tặng: Bộ đóng gói cao cấp, ý nghĩa - L1",
            price: 0,
            quantity: 1,
            image: "/placeholder.svg?height=80&width=80",
            isGift: true,
            isLimited: true,
        },
        {
            id: 3,
            name: "Quà Tặng: Hộp trang sức bọc da Royal - L1",
            price: 0,
            quantity: 9,
            image: "/placeholder.svg?height=80&width=80",
            isGift: true,
            isLimited: true,
        },
        {
            id: 4,
            name: "Quà Tặng: Hộp đựng đa trang sức bọc nhung",
            price: 0,
            quantity: 1,
            image: "/placeholder.svg?height=80&width=80",
            isGift: true,
            isLimited: true,
        },
    ]);

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = () => {
        router.push("/thanh-toan");
        onOpenChange(false);
    };

    const handleIncrease = (id: number) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCartItems);
    };

    const handleDecrease = (id: number) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedCartItems);
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="left" className="w-full sm:max-w-md p-0">
                <div className="flex flex-col h-full">
                    <div className="p-4 border-b">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" className="shrink-0">
                                    <path
                                        d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <SheetTitle className="text-lg font-medium">GIỎ HÀNG</SheetTitle>
                            </div>
                        </div>
                        <div className="text-sm text-muted-foreground">Chúc mừng bạn nhận được Free Ship</div>
                    </div>

                    <div className="flex-1 overflow-auto">
                        <div className="divide-y">
                            {cartItems.map((item) => (
                                <div key={item.id} className="p-4">
                                    <div className="flex gap-4">
                                        <div className="relative w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                            <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col h-full justify-between">
                                                <div>
                                                    <div className="flex items-start gap-2 mb-1">
                                                        <h3 className="text-sm leading-tight">{item.name}</h3>
                                                        {item.isLimited && (
                                                            <span className="inline-flex items-center px-2 py-0.5 text-xs text-white bg-black rounded">
                                                                SỐ CÓ HẠN
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="text-sm">
                                                        Giá: {item.price > 0 ? new Intl.NumberFormat("vi-VN").format(item.price) + "₫" : "0₫"}
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between mt-2">
                                                    {!item.isGift ? (
                                                        <div className="flex items-center gap-3">
                                                            <button
                                                                className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700"
                                                                onClick={() => handleDecrease(item.id)}
                                                            >
                                                                -
                                                            </button>
                                                            <span className="w-8 text-center">{item.quantity}</span>
                                                            <button
                                                                className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700"
                                                                onClick={() => handleIncrease(item.id)}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <div className="text-sm text-gray-500">Số lượng: {item.quantity}</div>
                                                    )}
                                                    {!item.isGift && (
                                                        <div className="text-sm font-medium">
                                                            {new Intl.NumberFormat("vi-VN").format(item.price * item.quantity)}₫
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-t p-4 space-y-4">
                        <div className="flex items-center justify-between text-base font-medium">
                            <span>Tổng giá</span>
                            <span className="text-red-600">{new Intl.NumberFormat("vi-VN").format(totalPrice)}₫</span>
                        </div>
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6" onClick={handleCheckout}>
                            THANH TOÁN
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}