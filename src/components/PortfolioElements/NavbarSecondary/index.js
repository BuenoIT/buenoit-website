import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo from '../../../images/guibuenologo.png';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavImg,
} from './NavbarElements';

const NavbarSecondary = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/">
            <NavImg src={Logo}></NavImg>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/about">About me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/background">Background</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/portfolio">Porfolio</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavbarSecondary;
