"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CartDrawer } from "@/components/cart-drawer";

export function ProductActionsNow() {
    const [cartOpen, setCartOpen] = useState(false);

    const handleBuyNow = () => {
        setCartOpen(true);
    };

    return (
        <>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6" onClick={handleBuyNow}>MUA NGAY</Button>
            <Button variant="outline" className="border-gray-300 px-8 py-6">
                GỌI TƯ VẤN MIỄN PHÍ
            </Button>
            <CartDrawer open={cartOpen} onOpenChange={setCartOpen} />
        </>
    );
}