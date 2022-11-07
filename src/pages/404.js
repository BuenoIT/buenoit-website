import { React } from 'react';
import Footer from '../components/HomeElements/Footer';
import InfoSection from '../components/HomeElements/Info';
import { homeObjFour } from '../components/HomeElements/Info/Data';

const NotFound = () => {
  return (
    <>
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
};

export default NotFound;
