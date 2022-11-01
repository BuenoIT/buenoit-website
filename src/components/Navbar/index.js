import React from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../../images/guibuenologo.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavImg,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavImg src={Logo}></NavImg>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="background">Background</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="portfolio">Porfolio</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contactme">Contact me</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
