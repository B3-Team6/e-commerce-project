import Image from "next/image"
import React, { useState, useEffect } from "react"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

const CarouselProduct = () => {
  const images = [
    { id: 1, src: "/images/lit.jpg" },
    { id: 2, src: "/images/canape.jpg" },
    { id: 3, src: "/images/table.jpg" },
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length)
    }, 2300)

    return () => clearInterval(intervalId)
  }, [images.length])

  const previousImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  return (
    <div className="relative lg:w-2/4">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-md bg-white bg-opacity-50 py-2 pl-6 pr-3 hover:bg-opacity-75"
        onClick={previousImage}
      >
        <ArrowLeftIcon className="h-8 w-8 text-black" />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-md bg-white bg-opacity-50 py-2 pl-3 pr-6 hover:bg-opacity-75"
        onClick={nextImage}
      >
        <ArrowRightIcon className="h-8 w-8 font-extrabold text-black" />
      </button>
      <div className="w-full overflow-hidden p-4">
        {images.map((item, index) => {
          const isActive = index === currentIndex

          return (
            <div key={item.id} style={{ display: isActive ? "block" : "none" }}>
              <Image
                className="rounded-3xl lg:w-screen "
                src={item.src}
                alt={item.id}
                width="5000"
                height="5000"
              />

              <div className=" flex justify-center">
                {images.map((item, index) => (
                  <div key={item.id} className="mx-2">
                    <button
                      className={`h-3 w-3 rounded-full ${
                        index === currentIndex ? "bg-black" : "bg-gray-300"
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CarouselProduct
