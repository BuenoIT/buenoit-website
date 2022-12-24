import React from 'react';
import { useState } from 'react';
import ContactMe from '../components/ContactElements/Contactme';
import NavbarSecondary from '../components/PortfolioElements/NavbarSecondary';
import TopbarSecondary from '../components/PortfolioElements/TopbarSecondary';
import Foooter from '../components/HomeElements/Footer';

const ContactMePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <TopbarSecondary isOpen={isOpen} toggle={toggle} />
      <NavbarSecondary toggle={toggle} />
      <ContactMe />
      <Foooter />
    </>
  );
};

export default ContactMePage;
