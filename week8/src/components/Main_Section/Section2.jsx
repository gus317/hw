import React from 'react'
import Section02_1 from '../../assets/img/Section02_1.png'
import Section02_2 from '../../assets/img/Section02_2.png'
import Section02_3 from '../../assets/img/Section02_3.png'
import Section02_4 from '../../assets/img/Section02_4.png'
import Section02_5 from '../../assets/img/Section02_5.png'
import Section02_6 from '../../assets/img/Section02_6.png'
import Section02_7 from '../../assets/img/Section02_7.png'
import Section02_hearts from '../../assets/img/Section02_heart.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'
import "swiper/css";
import 'swiper/css/navigation'

const now_popular = [
  Section02_1,
  Section02_2,
  Section02_3,
  Section02_4,
  Section02_5,
  Section02_6,
  Section02_7,
]
const Section2 = () => {
  return (
    <div className='Section2_wrap'>
      <div className="Section02">
        <div className='Now'>
        <h1>지금 많이 찾는 상품</h1>
      </div>
      <div className='Tag'>
        <div><h3>#냉감티셔츠</h3></div>
        <div><h3>#에샤페</h3></div>
        <div><h3>#반팔티셔츠</h3></div>
        <div><h3>#페이토&샌들</h3></div>
        <div><h3>#인터런</h3></div>
      </div>
      </div>
      <div className="Now_Popular">
         <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={5}
        >
          {now_popular.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="Products">
                <img src={item} alt='' />
                <h2><br/>공용 컴포트핏 라이프스타일</h2>
                <h1>{'<'}COLD WAVE{'>'}그래픽 프린트 냉감 티셔츠</h1>
                <h2>49,000원</h2>
                <div className='heart'>
                  <img src={Section02_hearts} alt="" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
    </div>
  )
}

export default Section2
