import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Gall from './components/Gall';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<MainContent />} /> {/* MainContent for the home page */}
        <Route path="/gall" element={<Gall />} /> {/* Gallery for the /gallery route */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
