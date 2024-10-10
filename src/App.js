import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/common/Footer';
// import HeroSection from './components/Home/Herosection';
// import ImageSlider from './components/Home/ImageSlider';




function App() {
  return (
 <Router>
  <Navbar/>
  <Home/>
  <Footer/>

  
  {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About us/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Makeup />} />
          <Route path="/contact" element={<Men grooming />} />
          <Route path="/contact" element={<Gallary />} />
          <Route path="/contact" element={<Contact us/>} />

  </Routes> */}
  
 </Router>
  );
}

export default App;
