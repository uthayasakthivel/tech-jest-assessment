import React from "react"

const SliderCardContent = ({ image }) => {
  return (
    <div className="sliderContent">
      <p>Unlock Amazing Benefits with Our</p>
      <h3>Global Loyalty Program</h3>
      <button>Join Encircle Program</button>
      <img src={image} alt="" className="bg-dark" />
    </div>
  )
}

export default SliderCardContent
