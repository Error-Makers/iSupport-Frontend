import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/Home";
import AboutUs from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Browse from "./pages/Browse";
import Community from "./pages/Community";
import AuthComponent from "./pages/AuthLogin";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Profile from "./components/Profile";

import LoginProvider from "./context/auth/main";

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="browse" element={<Browse />} />
          <Route path="community/:communityId" element={<Community />} />
          <Route path="auth" element={<AuthComponent />} />
          <Route path="admin" element={<Admin />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
