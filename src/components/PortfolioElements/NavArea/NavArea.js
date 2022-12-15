import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const ButtonsNavContainer = styled.div`
  background-color: #676767;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 30 5px;
`;

export const ButtonNav = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #42c920;
    border-bottom: 3px solid #30aa64;
  }

  &:hover {
    color: #42c920;
  }
`;
