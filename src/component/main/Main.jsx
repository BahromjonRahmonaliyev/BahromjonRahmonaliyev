import React from 'react'
import HeaderTop from '../header-center/Header-top'
import Main_Product from '../main-product/Main_Product'
import Navbar from '../header/Navbar'
import './Main.scss'


const Main = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className="header-product">
        <HeaderTop />
        <Main_Product />
      </div>
    </div>
  )
}

export default Main