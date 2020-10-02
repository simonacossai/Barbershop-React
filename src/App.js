import React from 'react';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ListinoPrezzi from './components/ListinoPrezzi';
import Testimonial from './components/Testimonial';
import Galleria from './components/Galleria';
import Footer from './components/Footer';
import SimpleReactLightbox from "simple-react-lightbox";
import './App.css';
import $ from 'jquery';



function App() {
  return (
    <div className="App">
      <SimpleReactLightbox>
     <Navbar />
     <Hero />
     <About />
     <Services />
     <ListinoPrezzi />
     <Testimonial />
     <Galleria />
     <Footer />
     </SimpleReactLightbox>
    </div>
  );
}

export default App;
