import React, { useState } from 'react';
import Background from '../components/BackgroundElements';
import ScrollButton from '../components/HomeElements/ScrollToTop';
import NavbarSecondary from '../components/PortfolioElements/NavbarSecondary';
import TopbarSecondary from '../components/PortfolioElements/TopbarSecondary';

const BackgroundPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <TopbarSecondary isOpen={isOpen} toggle={toggle} />
      <NavbarSecondary toggle={toggle} />
      <Background />
      <ScrollButton />
    </>
  );
};

export default BackgroundPage;
