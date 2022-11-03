import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const TopbarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #313131;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const TopBarWrapper = styled.div`
  color: #fff;
`;

export const TopBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const TopBarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #42c920;
    transition: 0.2 ease-in-out;
  }
`;

export const TopBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const TopBarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 16px 64px;
  color: #313131;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #42c920;
    color: #fff;
  }
`;
