import React from 'react';
import NavBar from './components/navBar';
import HeroSection from './components/hero';
import QuemSomos from './components/quemSomos';
import Serviços from './components/Serviços';
import Depoimentos from './components/Depoimentos';
import BlurBackground from './components/blurBackground';
import Footer from './components/Footer';

const App = () => {
  return (
   <>
    <BlurBackground/>
    <NavBar/>
    <HeroSection/>
    <QuemSomos/>
    <Serviços/>
    <Depoimentos/>
    <Footer/>
   </>
  )
}

export default App