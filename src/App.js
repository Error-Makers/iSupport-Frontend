import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './components/Posts';
import TopComunity from './components/TopComunity';
import Footer from './components/Footer';
import Leaderboard from './components/Leaderboard';
import PersonalProgress from './components/PersonalProgress';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Home';
import AboutUs from './pages/About';
import ContactUs from './pages/ContactUs';
import Browse from './pages/Browse';
import Community from './pages/Community';
import AuthComponent from './pages/AuthLogin';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='browse' element={<Browse />} />
        <Route path='community/:communityId' element={<Community />} />
        <Route path='auth' element={<AuthComponent />} />
        <Route path='admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
