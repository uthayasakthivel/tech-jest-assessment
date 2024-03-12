import React from "react"
import "./Perks.css"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import ProductSlide from "../../Components/ProductSlide"
import SlideButton from "../../Components/Swiper"
import { product1 } from "../../assets"
import { product2 } from "../../assets"
import { product3 } from "../../assets"
import { product4 } from "../../assets"
import { overlay } from "../../assets"
import { tanishqlogo } from "../../assets"

const Perks = () => {
  //   const swiper = useSwiper()
  return (
    <>
      <div className="perks-container">
        <h3>
          Our Rewards <span>Discover the Perks</span>{" "}
        </h3>
        <div className="fileter-section">
          <a href="#">upto 20% off</a>
          <a href="#">upto 20% off</a>
          <a href="#">upto 20% off</a>
          <a href="#">upto 20% off</a>
        </div>
        <div className="carousel-section">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            grabCursor={true}
            navigation={true}
            breakpoints={{
              540: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Navigation]}
            className="myProductSwiper"
          >
            <SwiperSlide className="product-slide1">
              <ProductSlide
                image={product1}
                icon={tanishqlogo}
                overlay={overlay}
              />
            </SwiperSlide>
            <SwiperSlide className="product-slide2">
              <ProductSlide
                image={product2}
                icon={tanishqlogo}
                overlay={overlay}
              />
            </SwiperSlide>
            <SwiperSlide className="product-slide3">
              <ProductSlide
                image={product3}
                icon={tanishqlogo}
                overlay={overlay}
              />
            </SwiperSlide>
            <SwiperSlide className="product-slide1">
              <ProductSlide
                image={product4}
                icon={tanishqlogo}
                overlay={overlay}
              />
            </SwiperSlide>
            <SwiperSlide className="product-slide2">
              <ProductSlide
                image={product1}
                icon={tanishqlogo}
                overlay={overlay}
              />
            </SwiperSlide>
            <SwiperSlide className="product-slide2">
              <ProductSlide
                image={product2}
                icon={tanishqlogo}
                overlay={overlay}
              />
            </SwiperSlide>
            <SwiperSlide className="product-slide3">
              <ProductSlide
                image={product3}
                icon={tanishqlogo}
                overlay={overlay}
              />
            </SwiperSlide>
            <SwiperSlide className="product-slide2">
              <ProductSlide
                image={product2}
                icon={tanishqlogo}
                overlay={overlay}
              />
            </SwiperSlide>
            <SlideButton />
          </Swiper>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button>Join Encircle Program</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Perks
