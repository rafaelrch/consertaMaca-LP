import React from 'react';
import NavBar from './components/navBar';
import HeroSection from './components/hero';
import QuemSomos from './components/quemSomos';
import Serviços from './components/Serviços';

const App = () => {
  return (
   <>
    <NavBar/>
    <HeroSection/>
    <QuemSomos/>
    <Serviços/>
   </>
  )
}

export default App