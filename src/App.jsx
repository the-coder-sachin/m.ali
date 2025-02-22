import React from 'react'
import Header from './components/header/Header'
import Category from './components/sections/Category'
import WhyChooseUs from './components/sections/WhyChooseUs'
import PartnerWithUs from './components/sections/PartnerWithUs'
import Footer from './components/sections/Footer'
import Products from './components/sections/Products'
import Divider from './components/sections/Divider'

const App = () => {
  return (
    <div>
      <Header/>
      <Divider/>
      <Category/>
      <Divider/>
      <WhyChooseUs/>
      <Divider/>
      <Products/>
      <Divider/>
      <PartnerWithUs/>
      <Divider/>
      <Footer/>
    </div>
  )
}

export default App