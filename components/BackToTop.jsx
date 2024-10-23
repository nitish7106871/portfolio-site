import React from 'react'
import { ChevronUp } from 'lucide-react'

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </button>
  )
}