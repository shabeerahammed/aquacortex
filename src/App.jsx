import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Technology from './pages/Technology';
import Solutions from './pages/Solutions';
import Impact from './pages/Impact';
import GlobalExpansion from './pages/GlobalExpansion';
import About from './pages/About';
import Contact from './pages/Contact';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const GlowBlobs = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Top-left blob */}
      <div
        className={`absolute top-[-100px] left-[-200px] w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse-slow`}
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(6, 182, 212, 0.2)' : 'rgba(135, 206, 250, 0.3)',
        }}
      />

      {/* Bottom-right blob */}
      <div
        className={`absolute bottom-[-100px] right-[-150px] w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse-slow delay-500`}
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(221, 160, 221, 0.3)',
        }}
      />
    </div>
  );
};

function AppContent() {
  return (
    <>
      <GlowBlobs />

      <div className="relative z-10">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/expansion" element={<GlobalExpansion />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-brand-navy text-white selection:bg-brand-cyan selection:text-brand-navy font-sans relative overflow-hidden">
          <AppContent />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
