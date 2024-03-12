import React, { useState } from "react"
import "./Form.css"
import { ribbons } from "../../assets"

import Encircle from "../Encircle/Encircle"
const Form = () => {
  const links = [
    {
      id: 1,
      name: "All",
      description:
        "Redeem your points on Tanishq, Mia, Titan Eyeplus & Titan watches.",
    },
    {
      id: 2,
      name: "Silver",
      description:
        "With Silver : Redeem your points on Tanishq, Mia, Titan Eyeplus & Titan watches.",
    },
    {
      id: 3,
      name: "Gold",
      description:
        "With Gold : Redeem your points on Tanishq, Mia, Titan Eyeplus & Titan watches.",
    },
    {
      id: 4,
      name: "Platinum",
      description:
        "With Platinum : Redeem your points on Tanishq, Mia, Titan Eyeplus & Titan watches.",
    },
  ]

  const [selectedLink, setSelectedLink] = useState(links[1])
  console.log(selectedLink)
  const handleLinkClick = (link, event) => {
    event.preventDefault() // Prevent page reload
    setSelectedLink(link)
  }

  return (
    <div className="form-section">
      <div className="form-content">
        <h3>
          Unleashing the Power of <span>Encircle reward Program</span>
        </h3>
        <div className="form-link">
          {links.map((link, id) => (
            <a
              href="#"
              key={id}
              onClick={(event) => handleLinkClick(link, event)}
              //   className={link === selectedLink ? "active" : ""}
              className={link.id === selectedLink.id ? "active" : ""}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="form-card">
          {selectedLink && (
            <Encircle
              name={selectedLink.name}
              description={selectedLink.description}
            />
          )}
        </div>
        <button>Join Encircle Program</button>
      </div>
    </div>
  )
}

export default Form
