import React from 'react'
import { Routes, Route, useLocation} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Menu from './components/Side_Section/Menu'
import Search from './components/Side_Section/Search'
import Checkout from './components/Side_Section/Checkout'
import Ourstory from './components/Side_Section/Ourstory'
import Contactus from './components/Main_Section/Contactus'
import Blog from './components/Main_Section/Blog_Grid'
import Category from './components/Main_Section/Category_Listview'
const App = () => {
  const locationNow = useLocation();
  const path = locationNow.pathname
  const hideBoth =['/Side_Section/Menu', '/Side_Section/Search'].includes(locationNow.pathname)
  const hideFooter =['/Side_Section/Checkout', '/Side_Section/Ourstory'].includes(locationNow.pathname)
  return (
    <>
    {!hideBoth && <Header />}

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Side_Section/Menu' element={<Menu />} />
        <Route path='/Side_Section/Search' element={<Search />} />
        <Route path='/Side_Section/Checkout' element={<Checkout />} />
        <Route path='/Side_Section/Ourstory' element={<Ourstory />} />
        <Route path='/Main_Section/Contactus' element={<Contactus />} />
        <Route path='/Main_Section/Blog_Grid' element={<Blog />} />
        <Route path='/Main_Section/Category_Listview' element={<Category />} />
      </Routes>

      {!(hideBoth || hideFooter)&& <Footer />}
    </>
  )
}

export default App
