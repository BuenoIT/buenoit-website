import React, { useState } from 'react';
import MyLife from '../components/AboutMeElements';
import Footer from '../components/HomeElements/Footer';
import TopbarSecondary from '../components/PortfolioElements/TopbarSecondary';
import NavbarSecondary from '../components/PortfolioElements/NavbarSecondary';

const AboutMePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <TopbarSecondary isOpen={isOpen} toggle={toggle} />
      <NavbarSecondary toggle={toggle} />
      <MyLife />
      <Footer />
    </>
  );
};

export default AboutMePage;
