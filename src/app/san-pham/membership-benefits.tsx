import { Card, CardContent } from "@/components/ui/card"
import { Gift, ThumbsUp, Users, Share2 } from "lucide-react"

const membershipCards = [
  {
    id: 1,
    title: "ƯU ĐÃI THÀNH VIÊN",
    description: "Thành viên sẽ nhận được hộp trang sức trị giá 224.000₫ và xu tích lũy,...",
    icon: Users,
  },
  {
    id: 2,
    title: "ĐÁNH GIÁ TỪ GOOGLE",
    description: "5/5 sao theo đánh giá của khách hàng đã mua hàng của LILI trên Google",
    icon: ThumbsUp,
  },
  {
    id: 3,
    title: "QUÀ TẶNG MIỄN PHÍ",
    description: "Bạn sẽ nhận được nhiều quà tặng hấp dẫn miễn phí cho đơn hàng bất kỳ",
    icon: Gift,
  },
  {
    id: 4,
    title: "ƯU ĐÃI AFFILIATE",
    description: "Tham gia để nhận hoa hồng lên đến 17,5% giá trị đơn hàng và nhiều ưu đãi",
    icon: Share2,
  },
]

export default function MembershipBenefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {membershipCards.map((card) => (
        <Card key={card.id} className="border border-gray-200">
          <CardContent className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <card.icon className="h-12 w-12 text-gray-800" />
            </div>
            <h3 className="font-bold text-lg mb-2">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

