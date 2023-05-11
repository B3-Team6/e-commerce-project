import Image from "next/image"
import React, { useState, useEffect } from "react"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

const Carousel = () => {
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
    <>
      <div className="flex justify-center">
        <div className="relative w-full md:w-2/3 lg:w-1/2 overflow-hidden p-4">
          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 px-3 py-2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-md "
            onClick={previousImage}
          >
            <ArrowLeftIcon className="w-8 h-8 text-black" />
          </button>
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 px-3 py-2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-md"
            onClick={nextImage}
          >
            <ArrowRightIcon className="h-8 w-8 text-black font-extrabold" />
          </button>

          {images.map((item, index) => {
            const isActive = index === currentIndex

            return (
              <div
                key={item.id}
                style={{ display: isActive ? "block" : "none" }}            
              >
                <Image
                  className="rounded-3xl w-screen"
                  src={item.src}
                  alt={item.id}
                  width="5000"
                  height="5000"
                />

                
                <div className=" flex justify-center">
                  {images.map((item, index) => (
                    <div key={item.id} className="mx-2">
                      <button
                        className={`w-3 h-3 rounded-full ${
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
    </>
  )
}

export default Carousel
