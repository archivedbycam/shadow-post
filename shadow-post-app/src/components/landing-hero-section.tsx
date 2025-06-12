"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

// Sample carousel data - replace with your actual content
const carouselItems = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 }
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isTransitioning])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
    setTimeout(() => setIsTransitioning(false), 300)
  }

  const getAdjacentIndexes = () => {
    const prev = (currentIndex - 1 + carouselItems.length) % carouselItems.length
    const next = (currentIndex + 1) % carouselItems.length
    return { prev, next }
  }

  const { prev, next } = getAdjacentIndexes()

  return (
    <section className="min-h-screen bg-[#ffffff] relative flex items-center justify-center">
      {/* Main heading */}
      <div className="text-center absolute top-[146px] left-0 right-0 max-w-4xl mx-auto">
        <h2 className="text-[48px] font-semibold text-[#000000] leading-tight">
          Your Content, On Your Schedule.
          <br />
          No More Interruptions.
        </h2>
      </div>

      {/* Content carousel area */}
      <div className="w-full max-w-7xl flex items-center justify-center gap-8 absolute top-[318px] left-1/2 transform -translate-x-1/2">
        {/* Left side content preview */}
        <div className="hidden lg:block">
          <div 
            className="w-48 h-80 rounded-lg bg-[#e5e5e5] transition-all duration-300 ease-in-out cursor-pointer opacity-60 hover:opacity-80 flex items-center justify-center"
            onClick={() => goToSlide(prev)}
          >
            <span className="text-4xl font-bold text-[#222]">{carouselItems[prev].id}</span>
          </div>
        </div>

        {/* Left navigation arrow */}
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-[#ffffff] shadow-sm border border-[#e2e8f0] hover:bg-[#e2e8f0] transition-all duration-200"
          onClick={prevSlide}
          disabled={isTransitioning}
        >
          <ChevronLeft className="h-6 w-6 text-[#bbbbbb]" />
        </Button>

        {/* Main content area */}
        <div className="flex-1 max-w-2xl relative overflow-hidden">
          <div className="relative h-80">
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
              >
                <div 
                  className="w-full h-full rounded-lg bg-[#c4c4c4] flex items-center justify-center"
                >
                  <span className="text-6xl font-bold text-[#222]">{item.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right navigation arrow */}
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12 rounded-full bg-[#ffffff] shadow-sm border border-[#e2e8f0] hover:bg-[#e2e8f0] transition-all duration-200"
          onClick={nextSlide}
          disabled={isTransitioning}
        >
          <ChevronRight className="h-6 w-6 text-[#bbbbbb]" />
        </Button>

        {/* Right side content preview */}
        <div className="hidden lg:block">
          <div 
            className="w-48 h-80 rounded-lg bg-[#e5e5e5] transition-all duration-300 ease-in-out cursor-pointer opacity-60 hover:opacity-80 flex items-center justify-center"
            onClick={() => goToSlide(next)}
          >
            <span className="text-4xl font-bold text-[#222]">{carouselItems[next].id}</span>
          </div>
        </div>
      </div>

      {/* Learn More button at bottom */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <Button className="bg-[#000000] text-[#ffffff] hover:bg-[#333333] px-8 py-3 text-lg font-medium transition-all duration-200">
          Learn More
        </Button>
      </div>
    </section>
  )
}
