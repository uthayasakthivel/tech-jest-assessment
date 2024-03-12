import React from "react"

const Encircle = ({ name, description }) => {
  return (
    <div>
      <div className="form-card-content">
        <h4>{name}</h4>
        <p>{description}</p>
        <a href="">
          Know More<span></span>
        </a>
      </div>
      {/* <div className="ribbons">
            <img src={ribbons1} alt="" />
          </div> */}
    </div>
  )
}

export default Encircle
