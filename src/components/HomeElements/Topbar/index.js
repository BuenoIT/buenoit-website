import React from 'react';
import {
  TopbarContainer,
  Icon,
  CloseIcon,
  TopBarWrapper,
  TopBarMenu,
  TopBarLink,
  TopBtnWrap,
  TopBarRoute,
} from './TopBarElements';

const Topbar = ({ isOpen, toggle }) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <TopBarWrapper>
        <TopBarMenu>
          <TopBarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            About me
          </TopBarLink>
          <TopBarLink
            to="background"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Background
          </TopBarLink>
          <TopBarLink
            to="portfolio"
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Porfolio
          </TopBarLink>
        </TopBarMenu>
        <TopBtnWrap>
          <TopBarRoute to="/contactme">Contact Me</TopBarRoute>
        </TopBtnWrap>
      </TopBarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
