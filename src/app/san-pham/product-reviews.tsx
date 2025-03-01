"use client"

import { Star, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const reviews = [
  {
    id: 1,
    author: "Phạm Trần Thanh Tú",
    rating: 5,
    comment: "Vòng đẹp lắm ạ. Sáng nữa. Sẽ ủng hộ shop dài dài...........",
  },
  {
    id: 2,
    author: "Lê Ngọc Phương Trinh",
    rating: 5,
    comment: "Shop đóng gói cẩn thận, có hộp đựng đẹm lắc. Nhưng thời gian chuẩn bị hàng hơi lâu. Lắc rất sáng và đẹp",
  },
  {
    id: 3,
    author: "Trần Nguyễn Như Quỳnh",
    rating: 5,
    comment: "Đẹp và sáng rất ưng ý. Có hộp làm quà tặng tiện luôn. Sẽ còn ủng hộ shop",
  },
]

export default function ProductReviews() {
  return (
    <div className="space-y-6">
      <div className="flex items-start gap-12">
        <div className="flex-1">
          <div className="text-center mb-4">
            <div className="text-4xl font-bold mb-2">5/5</div>
            <div className="flex justify-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-sm text-gray-600 mt-2">Tổng số 03 lượt đánh giá</div>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <ThumbsUp className="w-5 h-5" />
            <span>03 Đánh giá yêu thích sản phẩm này</span>
          </div>
        </div>

        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2 mb-2">
              <div className="w-16">{rating} Sao</div>
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-yellow-400"
                  style={{
                    width: rating === 5 ? "100%" : "0%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Select defaultValue="recent">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sắp xếp" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Đánh giá gần đây</SelectItem>
            <SelectItem value="highest">Đánh giá cao nhất</SelectItem>
            <SelectItem value="lowest">Đánh giá thấp nhất</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline">VIẾT ĐÁNH GIÁ</Button>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex gap-1 mb-2">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="font-medium mb-1">{review.author}</div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

