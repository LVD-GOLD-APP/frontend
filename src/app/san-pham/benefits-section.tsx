import { RefreshCw, Truck, Shield, CreditCard, Clock } from "lucide-react"

const benefits = [
  {
    id: 1,
    title: "Hoàn tiền nếu không hài lòng",
    icon: RefreshCw,
  },
  {
    id: 2,
    title: "10 ngày đổi trả tận nơi",
    icon: Clock,
  },
  {
    id: 3,
    title: "Cam kết chất lượng sản phẩm",
    icon: Shield,
  },
  {
    id: 4,
    title: "Free Ship toàn quốc từ 498k",
    icon: Truck,
  },
  {
    id: 5,
    title: "Kiểm tra trước khi thanh toán",
    icon: CreditCard,
  },
  {
    id: 6,
    title: "Bảo hành 12 tháng tận nơi",
    icon: Shield,
  },
]

export default function BenefitsSection() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {benefits.map((benefit) => (
        <div key={benefit.id} className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
            <benefit.icon className="h-6 w-6 text-gray-600" />
          </div>
          <p className="text-sm">{benefit.title}</p>
        </div>
      ))}
    </div>
  )
}

