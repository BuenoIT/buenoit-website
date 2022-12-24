import React, { useState } from 'react';
import ScrollButton from '../components/HomeElements/ScrollToTop';
import PortolioStructure from '../components/PortfolioElements';
import ButtonsNav from '../components/PortfolioElements/NavArea';
import NavbarSecondary from '../components/PortfolioElements/NavbarSecondary';
import TopbarSecondary from '../components/PortfolioElements/TopbarSecondary';

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <TopbarSecondary isOpen={isOpen} toggle={toggle} />
      <NavbarSecondary toggle={toggle} />
      <ButtonsNav />
      <PortolioStructure />
      <ScrollButton />
    </>
  );
};

export default Portfolio;
