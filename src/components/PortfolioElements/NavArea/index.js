import React from 'react';
import { ButtonNav, ButtonsNavContainer } from './NavArea';

const ButtonsNav = () => {
  return (
    <>
      <ButtonsNavContainer>
        <ButtonNav to="c#" smooth={true} duration={500} spy={true} exact="true">
          C#
        </ButtonNav>
        <ButtonNav
          to="react"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
        >
          React JS
        </ButtonNav>
        <ButtonNav
          to="javascript"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
        >
          Javascript
        </ButtonNav>
        <ButtonNav
          to="aspNet"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
        >
          ASP Net
        </ButtonNav>
      </ButtonsNavContainer>
    </>
  );
};

export default ButtonsNav;
