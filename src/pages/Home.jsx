import React, { Fragment } from 'react'
import Header from '../components/Header'
import HeroSlider from '../components/hero-slider/HeroSlider'
import PopularMenu from '../components/popular-menu/PopularMenu'
import MenuPack from '../components/menu-pack/MenuPack'
import Footer from '../components/footer/Footer'

const Home = () => {
  return <Fragment>
    <Header/>
    <HeroSlider/>
    <PopularMenu/>
    <MenuPack/>
    <Footer/>
    </Fragment>
    
}

export default Home