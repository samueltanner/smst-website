import { useState } from 'react'
export const SectionAdvancer = ({ sectionIndex, pages, setSectionIndex }) => {
  // const [currentPage, setCurrentPage] = useState(0)
  return (
    <div className="flex gap-3">
      {[...Array(pages)].map((page, index) => (
        <span
          key={index}
          onClick={() => setSectionIndex(index)}
          className={`h-3 w-3 rounded-full ${
            index === sectionIndex ? 'bg-secondary' : 'bg-offWhite '
          } ring-2 ring-primary ring-offset-2 ring-offset-offWhite hover:drop-shadow-sm`}
        />
      ))}
      {/* <span className="h-3 w-3 rounded-full ring-2 ring-primary" />
      <span className="h-3 w-3 rounded-full ring-2 ring-primary" /> */}
    </div>
  )
}
