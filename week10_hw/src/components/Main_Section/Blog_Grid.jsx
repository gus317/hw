import React from 'react'
import B1 from '../../assets/img/png/B1.png'
import B2 from '../../assets/img/png/B2.png'
import B3 from '../../assets/img/png/B3.png'
import B4 from '../../assets/img/png/B4.png'
const Blog_Grid = () => {
  return (
    <div className="wrap">
      <div className="blogwrap">
        <div className="box1">
          <p className='B'>BLOG</p>
          <svg className='top' width="126" height="10" viewBox="0 0 126 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M63.4095 9.3246L67.9591 4.77501H125.811V4.56821H67.9591L63.4095 0.0703125L58.9116 4.56821H0.852539V4.77501H58.9116L63.4095 9.3246ZM63.4095 0.380512L67.7523 4.67161L63.4095 9.0144L59.0667 4.67161L63.4095 0.380512Z" fill="#555555"/>
          </svg>
        </div>
        <div className="box2">
              <p className='F'>Fashion</p>
              <p className='P'>Promo</p>
              <p className='P'>Policy</p>
              <p className='L'>Lookbook</p>
              <p className='S'>Santa~</p>
        </div>
        <div className="box3">
          <div className="box3_1">
            <img src={B1} alt="" />
            <div className="box3_1_1">
              <p className='F'>#Fashion</p>
              <p className='T'>#Tips</p>
              <p className='d'>4days ago</p>
            </div>
          </div>
          <div className="box3_2">
            <img src={B2} alt="" />
            <div className="box3_2_1">
              <p className='F'>#Fashion</p>
              <p className='T'>#Tips</p>
              <p className='d'>4days ago</p>
            </div>
          </div> 
          <div className="box3_3">
            <img src={B3} alt="" />
            <div className="box3_3_1">
              <p className='F'>#Fashion</p>
              <p className='T'>#Tips</p>
              <p className='d'>4days ago</p>
            </div>
          </div>
          <div className="box3_4">
            <img src={B4} alt="" />
            <div className="box3_4_1">
              <p className='F'>#Fashion</p>
              <p className='T'>#Tips</p>
              <p className='d'>4days ago</p>
            </div>
          </div>        
        </div>
        <div className="box4">
          <p className='L'>LOAD MORE</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3V21" stroke="#333333"/>
          <path d="M3 12L21 12" stroke="#333333"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Blog_Grid
