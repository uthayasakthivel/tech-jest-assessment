import React from "react"
import SliderCard from "../../Components/SliderCard"
import { Swiper, SwiperSlide } from "swiper/react"
import "./Header.css"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules"

// import { slider1 } from "../../assets"
// import { slider2 } from "../../assets"
// import { slider3 } from "../../assets"

const Header = () => {
  // useEffect(() => {
  //   window.location.reload()
  // }, [])
  return (
    <div className="header">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        
        pagination={{
          clickable: true,
        }}
        breakpoints={{
           
              760: {
                slidesPerView: 1.5,
                spaceBetween: 50,
              },
            }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide1">
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide3">
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide1">
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide2">
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide3">
          <SliderCard />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Header
