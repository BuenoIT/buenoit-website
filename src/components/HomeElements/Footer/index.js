import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import {
  FooterContainer,
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
                <FooterLinkTitle to="/about">About Me</FooterLinkTitle>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle to="/background">Background</FooterLinkTitle>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle to="/portfolio">Portfolio</FooterLinkTitle>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle to="/contactme">Contact Me</FooterLinkTitle>
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
                <SocialIconLink
                  href="https://www.linkedin.com/in/guilherme-bueno-pmp/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://github.com/BuenoIT"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/gcbueno0/"
                  target="_blank"
                  aria-label="Instagram"
                >
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
