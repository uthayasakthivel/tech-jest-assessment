import React from "react"
import { PiArrowRightLight, PiArrowLeftLight } from "react-icons/pi"

import { useSwiper } from "swiper/react"
export default function SlideButton() {
  const swiper = useSwiper()

  return (
    <div className="arrows">
      <span onClick={() => swiper.slidePrev()} className="leftarrow">
        <PiArrowLeftLight color="white" size={35} fontWeight={100} />
      </span>
      <span onClick={() => swiper.slideNext()} className="rightarrow">
        <PiArrowRightLight color="white" size={35} />
      </span>
    </div>
  )
}
