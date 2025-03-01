interface SectionTitleProps {
    title: string
  }
  
  export function SectionTitle({ title }: SectionTitleProps) {
    return (
      <div className="relative flex items-center justify-center py-4">
        <div className="absolute left-0 right-0 h-px bg-gray-200" />
        <h2 className="relative px-4 text-2xl font-semibold bg-white">{title}</h2>
      </div>
    )
  }
  
  