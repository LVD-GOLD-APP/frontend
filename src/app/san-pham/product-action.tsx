"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function ProductActions() {
    const router = useRouter();

    const handleCheckout = () => {
        router.push("/thanh-toan");
    };

    return (
        <>
            <Button
                className="w-full bg-red-600 hover:bg-red-700 text-white py-6 mb-6"
                onClick={handleCheckout}
            >
                BẤM ĐỂ MUA NGAY ƯU ĐÃI
            </Button>
        </>
    );
}