import { Headset, Medal, Package, Smile } from "lucide-react";

function SubFooter() {
  return (
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
        <p className="text-center text-sm">Tất cả câu hỏi đều được các chuyên viên của LiLi tư vấn, giải đáp kỹ càng</p>
      </div>
    </div>
  );
}

export default SubFooter;
