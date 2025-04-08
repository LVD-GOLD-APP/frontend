/* eslint-disable @typescript-eslint/no-unused-vars */
interface CategoryBannerProps {
    title: string
    description: string
    image: string
  }
  
  export function CategoryBanner({ title, description, image }: CategoryBannerProps) {
    return (
      <div className="relative w-full bg-amber-50">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{title}</h1>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    )
  }
  
  