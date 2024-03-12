import React from "react"
import { ribbons1, ball } from "../../assets"
const Encircle = ({ name, description }) => {
  return (
    <div>
      <div className="form-card-content">
        <div className="form-card-text">
          <h4>{name}</h4>
          <p>{description}</p>
          <a href="">
            Know More<span></span>
          </a>
        </div>
        <div className="ribbons">
          <img src={ribbons1} alt="" />
        </div>
        <div className="ball1 ball">
          <img src={ball} alt="" />
        </div>
        <div className="ball2 ball">
          <img src={ball} alt="" />
        </div>
        <div className="ball3 ball">
          <img src={ball} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Encircle
