import React from 'react';
import NavBar from './components/navBar';
import HeroSection from './components/hero';
import QuemSomos from './components/quemSomos';
import Serviços from './components/Serviços';
import Footer from './components/Footer';
import Orçamento from './components/orçamento'

const App = () => {
  return (
   <>
    <NavBar/>
    <HeroSection/>
    <Serviços/>
    <Orçamento/>
    <Footer/>
   </>
  )
}

export default App