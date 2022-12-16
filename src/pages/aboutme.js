import React from 'react';
import MyLife from '../components/AboutMeElements';
import { SliderInfos } from '../components/AboutMeElements/Data';
import Footer from '../components/HomeElements/Footer';
import NavbarSecondary from '../components/PortfolioElements/NavbarSecondary';

const AboutMePage = () => {
  return (
    <>
      <NavbarSecondary />
      <MyLife slides={SliderInfos} />
      <Footer />
    </>
  );
};

export default AboutMePage;
