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
} from './TopBarSecondaryElements';

const TopbarSecondary = ({ isOpen, toggle }) => {
  return (
    <TopbarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <TopBarWrapper>
        <TopBarMenu>
          <TopBarLink to="/about" onClick={toggle}>
            About me
          </TopBarLink>
          <TopBarLink to="/background" onClick={toggle}>
            Background
          </TopBarLink>
          <TopBarLink to="/portfolio" onClick={toggle}>
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

export default TopbarSecondary;
