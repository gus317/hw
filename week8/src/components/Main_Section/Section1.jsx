import React from 'react'
import WhiteLogo from '../../assets/img/WhiteFilaLogo.png'
import Section01_1 from '../../assets/img/Section01_1.png'
import Section01_2 from '../../assets/img/Section01_2.png'
import Section01_3 from '../../assets/img/Section01_3.png'
import Section01_4 from '../../assets/img/Section01_4.png'
import Section01_5 from '../../assets/img/Section01_5.png'
import Section01_Map from '../../assets/img/Section01_Map.png'
import Section01_Search from '../../assets/img/Section01_Search.png'
import Section01_My from '../../assets/img/Section01_My.png'
import Section01_Cart from '../../assets/img/Section01_Cart.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";


const backgroundImages = [
  Section01_1,
  Section01_2,
  Section01_3,
  Section01_4,
  Section01_5,
];

const Section1 = () => {
  return (
    <div className='Section1_wrap'>
        <Swiper modules={[Autoplay]} autoplay={{ delay: 4000 }} loop={true} className="Section01">
            {backgroundImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="backgroundImages" style={{ backgroundImage: `url(${img})` }}></div>
          </SwiperSlide>
        ))}
        </Swiper>

        <div className="Nav">
            <div className="Logo">
                <img src={WhiteLogo} alt=''/>
            </div>
            <div className="Menu">
                <h3>WOMEN</h3>
                <h3>MEN</h3>
                <h3>KIDS</h3>
                <h3>|</h3>
                <h3>TENNIS</h3>
                <h3>BRAND</h3>
            </div>
            <div className="icon">
                <div>
                    <img src={Section01_Map} alt=''/>
                </div>
                <div>
                    <img src={Section01_Search} alt=''/>
                </div>
                <div>
                    <img src={Section01_My} alt=''/>
                </div>
                <div>
                    <img src={Section01_Cart} alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1
