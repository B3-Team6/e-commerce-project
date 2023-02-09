import Image from "next/image";
import React, { useState, useEffect } from "react";

const CarouselProduct = () => {
  const images = [
    { id: 1, src: "images/lit.jpg" },
    { id: 2, src: "images/canape.jpg" },
    { id: 3, src: "images/table.jpg" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, 2300);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="flex justify-start">
      <div className=" w-1/3 overflow-hidden p-4">
        {images.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <div key={item.id} style={{ display: isActive ? "block" : "none" }}>
              <img className="rounded-3xl" src={item.src} alt={item.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselProduct;