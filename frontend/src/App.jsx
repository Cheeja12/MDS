import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Slider from './components/Slider';
import AboutUs from './components/AboutUs';
import OurMission from './components/OurMission';
import Footer from './components/Footer';
import Term from './components/Term';
import Categorization from './components/Categorization';
import './App.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/categorization';

  return (
    <div className="app">
      {!hideHeaderFooter && <Header />}
      <div className="main-content">
        {children}
      </div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

const MainPage = () => (
  <>
    <Slider />
    <AboutUs />
    <OurMission />
  </>
);

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/term" element={<Term />} />
          <Route path="/categorization" element={<Categorization />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
