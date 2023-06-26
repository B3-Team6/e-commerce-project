import React from "react"
import Image from "next-image"

const PhotoComponent = () => {
  return (
    <div>
      <div>
        {}
        <Image src="public/images/armoire.jpg" alt="Photo" />
      </div>
      <div>
        {/* Bouton */}
        <button>Mon bouton</button>
      </div>
    </div>
  )
}

export default PhotoComponent
