import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrapper,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Block 1</FooterLinkTitle>
                <FooterLink to="/">Item 1</FooterLink>
                <FooterLink to="/">Item 2</FooterLink>
                <FooterLink to="/">Item 3</FooterLink>
                <FooterLink to="/">Item 4</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Block 2</FooterLinkTitle>
                <FooterLink to="/">Item 1</FooterLink>
                <FooterLink to="/">Item 2</FooterLink>
                <FooterLink to="/">Item 3</FooterLink>
                <FooterLink to="/">Item 4</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Block 3</FooterLinkTitle>
                <FooterLink to="/">Item 1</FooterLink>
                <FooterLink to="/">Item 2</FooterLink>
                <FooterLink to="/">Item 3</FooterLink>
                <FooterLink to="/">Item 4</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Block 4</FooterLinkTitle>
                <FooterLink to="/">Item 1</FooterLink>
                <FooterLink to="/">Item 2</FooterLink>
                <FooterLink to="/">Item 3</FooterLink>
                <FooterLink to="/">Item 4</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Gui Bueno
              </SocialLogo>
              <WebsiteRights>
                Guilherme Bueno © {new Date().getFullYear()} All rights
                reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Github">
                  <FaGithub />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
