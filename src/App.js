import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages';
import ContactMePage from './pages/contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/contactme" element={<ContactMePage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
