import React from 'react';
import NavBar from './components/navBar';
import HeroSection from './components/hero';
import QuemSomos from './components/quemSomos';
import Serviços from './components/Serviços';
import Footer from './components/Footer';

const App = () => {
  return (
   <>
    <NavBar/>
    <HeroSection/>
    <QuemSomos/>
    <Serviços/>
    <Footer/>
   </>
  )
}

export default App