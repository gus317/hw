import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const navigate = useNavigate();
  const change = (e) => {
    setkey(e.target.value)
  }
  const [key, setkey] = useState('')
  const search = () => {
    console.log(key)
  }
  const searchdelete = () => {
    setkey('')
  }
  return (
    <div className="wrap">
      <div className="Searchwrap">
        <div className="searchbox">
          <svg onClick={search} className='searchbutton' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 20.832C15.9706 20.832 20 16.8026 20 11.832C20 6.86147 15.9706 2.83203 11 2.83203C6.02944 2.83203 2 6.86147 2 11.832C2 16.8026 6.02944 20.832 11 20.832Z" stroke="#14142B"/>
          <path d="M21.9999 22.8309L18.7822 19.6133" stroke="#14142B"/>
          </svg>
          <div className='line'><input type="text" value={key} onChange={change} placeholder='Search items' /></div>
          <svg onClick={searchdelete} className='delete' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.125 3.89844L3.06445 4.95898L3.59766 5.48633L10.9395 12.834L3.06445 20.709L4.125 21.7695L12 13.8945L19.3418 21.2422L19.875 21.7695L20.9355 20.709L20.4082 20.1758L13.0605 12.834L20.9355 4.95898L19.875 3.89844L12 11.7734L4.65234 4.43164L4.125 3.89844Z" fill="#555555"/>
          </svg>
        </div>
        <div className="box">
          <p className='p'>Popular search terms</p>
          <p className='t'>Trend</p>
          <p className='d'>Dress</p>
          <p className='b'>Bag</p>
          <p className='t'>Tshirt</p>
          <p className='b'>Beauty</p>
          <p className='a'>Accessories</p>
        </div>
      </div>
    </div>
  )
}

export default Search
