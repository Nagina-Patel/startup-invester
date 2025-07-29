import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <AppRoutes />
            <Footer/>

    </Router>
  );
}

export default App;
