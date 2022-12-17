import styled from 'styled-components';

export const MyLifeWrapper = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradiant(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const MyLifeSection = styled.section`
  position: relative;
  display: flex;
  margin-bottom: 20%;
  justify-content: center;
  align-items: center;
`;

export const MyLifeH2 = styled.h2`
  margin-top: 100px;
  margin-left: 30%;
  margin-right: 30%;
  font-size: 14px;
  color: #313131;

  @media screen and(max-width: 480px) {
    font-size: 12px;
  }
`;
