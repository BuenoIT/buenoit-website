import React from 'react';
import ScrollButton from '../components/HomeElements/ScrollToTop';
import PortolioStructure from '../components/PortfolioElements';
import ButtonsNav from '../components/PortfolioElements/NavArea';
import NavbarSecondary from '../components/PortfolioElements/NavbarSecondary';

const Portfolio = () => {
  return (
    <>
      <NavbarSecondary />
      <ButtonsNav />
      <PortolioStructure />
      <ScrollButton />
    </>
  );
};

export default Portfolio;
