import React from 'react';
import { ButtonNav, ButtonsNavContainer } from './NavArea';

const ButtonsNav = () => {
  return (
    <>
      <ButtonsNavContainer>
        <ButtonNav to="c#">C#</ButtonNav>
        <ButtonNav to="react">React JS</ButtonNav>
        <ButtonNav to="javascript">Javascript</ButtonNav>
        <ButtonNav to="aspNet">ASP Net</ButtonNav>
      </ButtonsNavContainer>
    </>
  );
};

export default ButtonsNav;
