import styled from 'styled-components';

export const ScrollToTopBtn = styled.div`
  position: fixed;
  width: 100%;
  left: 90%;
  bottom: 40px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #42c920;

  @media screen and (max-width: 768px) {
    position: fixed;
    width: 100%;
    left: 80%;
    bottom: 40px;
    height: 20px;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: #42c920;
  }
`;
