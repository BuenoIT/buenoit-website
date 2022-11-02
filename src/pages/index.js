import React, { useState } from 'react';
import Hero from '../components/Hero';
import InfoSection from '../components/Info';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/Info/Data';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Topbar from '../components/Topbar';

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
    </>
  );
};

export default HomePage;
