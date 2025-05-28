import React from 'react'
import BlackLogo from '../../src/assets/img/BlackFilaLogo.png'

const footer = () => {
  return (
    <div className='Footer_wrap'>
       <div className="logo">
        <img src={BlackLogo} alt="" />
       </div>
       <div className="footer">
          <div className="left">
             <div className='lefttop'>
                <h3>매장안내</h3>
                <h3>|</h3>
                <h3>공지사항</h3>
                <h3>|</h3>
                <h3>FILA MEMBERSHIP</h3>
                <h3>|</h3>
                <h3>단체 판매</h3>
                <h3>|</h3>
                <h3>대리점 개설문의</h3>
                <h3>|</h3>
                <h3>FILA 입찰 참여 안내</h3>
            </div>
            <div className='leftmiddle'>
               <h4>서울특별시 성북구 보문로 35 휠라코리아{'('}주{')'}<br/>대표이사: 김지현</h4>
               <h4>사업자등록번호: 716-81-01573 사업자정보확인<br/>통신판매업신고: 제 2020-서울강동-0160 호</h4>
               <h4>개인정보 관리책임자: 이학우</h4>
               <br/>
               <h4>본 사이트의 상품이미지 저작권은 휠라코리아{'('}주{')'}에 있으며, 내용의 무단복제를 금합니다.<br/>콘텐츠산업진흥법에 의한 콘텐츠보호안내 자세히보기</h4>
           </div>
           <div className='leftbottom'>
               <h3>통합회원 이용약관</h3>
               <h3>|</h3>
               <h3>개인정보 처리방침</h3>
               <h3>|</h3>
               <h3>제보센터</h3>
            </div>
          </div>
          <div className="right">
              <div className='button'>
                <p>CS CENTER</p>
              </div>
              <div>
                <h1>1577-3472</h1>
                <h1>filaonline@fila.com</h1>
                <h3>평일 월-금: 09시 -18시 {'('}공휴일 제외{')'}</h3>
              </div>
              <div>
                <h6>FAMILY SITE</h6>
              </div>
          </div>
       </div>

    </div>
  )
}

export default footer
