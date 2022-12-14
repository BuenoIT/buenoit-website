import React, { useState } from 'react';
import MyLife from '../components/AboutMeElements';
import TopbarSecondary from '../components/PortfolioElements/TopbarSecondary';
import NavbarSecondary from '../components/PortfolioElements/NavbarSecondary';
import ScrollButton from '../components/HomeElements/ScrollToTop';
import Footer from '../components/HomeElements/Footer';

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
      <ScrollButton />
      <Footer />
    </>
  );
};

export default AboutMePage;
