import React from "react"

const ProductSlide = ({ image, icon, overlay }) => {
  const productDetails = {
    title: "Enjoy a 10% discount ",
    description: "on Diamond making charges!",
    offer: "*Limited Period Offer * T&C apply",
  }
  return (
    <div className="products">
      <img src={image} alt="" className="product-image" />

      <div className="product-details">
        <div className="discount-section">
          <div className="tanishq-icon">
            <img src={icon} alt="" />
          </div>
          <div className="discount-content">
            <h4>{productDetails.title}</h4>
            <p>{productDetails.description}</p>
            <hr />
          </div>
        </div>
        <p>{productDetails.offer}</p>
      </div>

      {/* <img src={overlay} alt="" className="overlay-image" /> */}
    </div>
  )
}

export default ProductSlide
