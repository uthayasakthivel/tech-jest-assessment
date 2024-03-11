import React from "react"
import SliderCardContent from "./SliderCardContent"

const SliderCard = ({ image }) => {
  return (
    <div className="slider-card">
      <img src={image} alt="" />
      <SliderCardContent />
    </div>
  )
}

export default SliderCard
