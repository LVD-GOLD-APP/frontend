import Image from "next/image";

export default function PaymentQR() {
  return (
    <div className="border p-2 text-center space-y-4">
      <p className="text-sm font-medium">Mã QR chuyển khoản ngân hàng</p>
      <div className="flex justify-center">
        <Image src="/vietqr-logo.png" alt="VietQR Logo" width={100} height={40} />
      </div>

      <div className="flex justify-center">
        <Image src="/qr-code.png" alt="QR Code" width={200} height={200} />
      </div>

      <div className="flex justify-center gap-4">
        <Image src="/napas247.png" alt="napas247" width={80} height={20} />
        <Image src="/mbbank-logo.png" alt="MB Bank" width={50} height={20} />
      </div>

      <div className="bg-gray-100 p-2 rounded text-sm font-medium">
        Vui lòng chuyển khoản đúng nội dung <span className="text-red-600">LILI170785</span> để chúng tôi xác nhận thanh
        toán
      </div>

      <div className="text-left text-sm space-y-2">
        <p>
          <strong>Tên tài khoản:</strong> VU TIEN THANH
        </p>
        <p>
          <strong>Số tài khoản:</strong> 00388468620
        </p>
        <p>
          <strong>Ngân hàng:</strong> MB Bank
        </p>
        <p>
          <strong>Số tiền:</strong> 1,784,000 <span className="text-xs text-gray-500">vnđ</span>
        </p>
        <p>
          <strong>Nội dung*:</strong> <span className="text-red-600">LILI170785</span>
        </p>
      </div>

      <button className="bg-black text-white py-2 px-6 rounded hover:opacity-90">TÔI ĐÃ THANH TOÁN</button>
    </div>
  );
}
