import React from 'react'
import Logo from '../../assets/img/likelion_w_logo.svg'

const Nav = () => {
    return (
        <div className='Nav_wrap'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <ul>
                    <li>브랜스 소개</li>
                    <li>서비스 소개</li>
                    <li>미디어</li>
                    <li>채용</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav