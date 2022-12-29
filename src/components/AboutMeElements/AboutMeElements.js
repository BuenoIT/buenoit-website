import styled from 'styled-components';
import { FaDownload } from 'react-icons/fa';

export const AboutMeContainer = styled.div`
  margin-top: 82px;
  margin-bottom: 2px;
  display: grid;
  height: 90vh;
  color: white;
  grid-template-rows: 0.5fr 0.9fr 0.5fr;
  grid-template-areas:
    'main main content'
    'main main content'
    'main main extracontent';
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  color: white;
  overflow: scroll;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1.2fr 1fr;
    grid-template-areas:
      'main'
      'content'
      'extracontent';
  }
`;
export const AboutMeImage = styled.img`
  width: 98%;
  height: 100%;

  @media (max-width: 768px) {
    width: 60%;
    height: 100%;
  }
`;

export const AboutMeMain = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;

export const AboutMeContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutMeContent1 = styled.div`
  background: #3d414e;
  color: white;
  font-family: 'Mukta', sans-serif;
  font-size: 1.1rem;
  padding: 10px;
  height: 100%;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 5px;
  }
`;

export const AboutMeContent2 = styled(AboutMeContent1)`
  background: #575c6f;
`;

export const AboutMeExtraContent = styled.div`
  background: #1f2128;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
  grid-area: extracontent;
  align-items: center;
  justify-content: center;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutMeExtraContentText = styled.div`
  flex-grow: 2;
  font-family: 'Mukta', sans-serif;
  font-size: 1.1rem;
`;
export const AboutMeExtraContentDownload = styled.div`
  background: #3d414e;
  flex-grow: 1;
`;
export const AboutMeAnchor = styled.a``;
export const AboutMeDownloadIcon = styled(FaDownload)`
  color: white;
  font-size: 2rem;
`;
