import React, { useState } from 'react';
import Footer from '../components/HomeElements/Footer';
import Hero from '../components/Hero';
import InfoSection from '../components/Info';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Info/Data';
import Navbar from '../components/HomeElements/Navbar';
import Skills from '../components/HomeElements/Skills';
import Topbar from '../components/HomeElements/Topbar';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Topbar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Skills />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default HomePage;
