import React from 'react';
import MyLife from '../components/AboutMeElements';
import Footer from '../components/HomeElements/Footer';
import NavbarSecondary from '../components/PortfolioElements/NavbarSecondary';

const AboutMePage = () => {
  return (
    <>
      <NavbarSecondary />
      <MyLife />
      <Footer />
    </>
  );
};

export default AboutMePage;
