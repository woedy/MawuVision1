import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PageTitle } from './components/PageTitle';
import { ScrollToTop } from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0B0C10]">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <PageTitle title="Home" />
              <Home />
            </>
          } />
          <Route path="/about" element={
            <>
              <PageTitle title="About" />
              <About />
            </>
          } />
          <Route path="/services" element={
            <>
              <PageTitle title="What We're Building" />
              <Services />
            </>
          } />
          <Route path="/contact" element={
            <>
              <PageTitle title="Contact" />
              <Contact />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
