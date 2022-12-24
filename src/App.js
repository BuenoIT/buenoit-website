import { Route, Routes } from 'react-router-dom/dist';
import Background from './components/BackgroundElements';
import ContactMePage from './pages/contactme';
import HomePage from './pages/index';
import AboutMePage from './pages/aboutme';
import Portfolio from './pages/portfolio';
import NotFound from './pages/404';
import AutoScrollToTop from './components/AutoScrollToTop';

const App = () => {
  return (
    <>
      <AutoScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contactme" element={<ContactMePage />} />
        <Route path="about" element={<AboutMePage />} />
        <Route path="background" element={<Background />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
