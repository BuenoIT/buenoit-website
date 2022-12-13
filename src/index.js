import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import ContactMePage from './pages/contactme';
import HomePage from './pages';
import NotFound from './pages/404';
import Background from './components/BackgroundElements';
import Portolio from './components/PortfolioElements';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route
        path="contactme"
        element={<ContactMePage />}
        action={ContactMePage.action}
      />
      <Route path="background" element={<Background />} />
      <Route path="portfolio" element={<Portolio />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
