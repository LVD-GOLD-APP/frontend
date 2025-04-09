import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const paymentMethods = [
  {
    id: "cod",
    label: "Thanh toán tiền mặt khi nhận hàng (COD)",
    description: (
      <>
        <p>
          Được <strong>Kiểm Hàng</strong> trước khi thanh toán. Ưng ý mới <strong>Nhận và Thanh Toán</strong>.
        </p>
        <p>
          Nếu không vừa ý có quyền <strong>Từ Chối</strong> nhận hàng mà <strong>Không Phải Trả</strong> bất kỳ khoản
          phí nào.
        </p>
      </>
    ),
  },
  {
    id: "bank",
    label: "Chuyển khoản ngân hàng hoặc ví điện tử MoMo, VNPAY,... (Tiết Kiệm 20.000đ)",
    description: (
      <p>
        Quý khách vui lòng chuyển khoản hoặc quét QR thanh toán sau khi nhấn <strong>Đặt Hàng</strong>.
      </p>
    ),
  },
];

export default function PaymentOptions() {
  const [selected, setSelected] = useState("cod");

  return (
    <div className="space-y-4 text-sm my-2">
      <h2 className="text-xl uppercase">PHƯƠNG THỨC THANH TOÁN</h2>

      <div className="space-y-2">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`border rounded transition duration-200 ${
              selected === method.id ? "border-gray-400 bg-gray-50" : "border-gray-200"
            }`}
          >
            <label className="flex items-start space-x-2 p-3 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value={method.id}
                checked={selected === method.id}
                onChange={() => setSelected(method.id)}
                className="mt-1 accent-blue-500"
              />
              <span className="text-gray-800">{method.label}</span>
            </label>

            <AnimatePresence initial={false}>
              {selected === method.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden px-5 pb-3 text-gray-700"
                >
                  {method.description}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
