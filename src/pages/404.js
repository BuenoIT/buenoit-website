import { React, useState } from 'react';
import Footer from '../components/HomeElements/Footer';
import InfoSection from '../components/HomeElements/Info';
import { homeObjFour } from '../components/HomeElements/Info/Data';
import Navbar from '../components/HomeElements/Navbar';
import Topbar from '../components/HomeElements/Topbar';

const NotFound = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
};

export default NotFound;
