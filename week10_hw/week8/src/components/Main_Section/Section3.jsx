import React from 'react'
import Section03_1 from '../../assets/img/Section03_1.png'
import Section03_2 from '../../assets/img/Section03_2.png'

const Section3 = () => {
  return (
    <div className='Section3_wrap'>
      <div className='Plan'>
          <h2>기획전</h2>
      </div>
      <div className='Sale'>
          <div className='left'>
            <img src={Section03_1} alt="" />
            <h3>FILA CUSTOM STUDIO</h3>
            <div className='button'>
              <span>자세히 보기</span>
            </div>
          </div>
          <div className='right'>
            <img src={Section03_2} alt="" />
            <h3>Pertex Life</h3>
            <div className='button'>
              <span>자세히 보기</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Section3
