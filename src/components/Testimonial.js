import React, {useState} from 'react';
import './Testimonial.css';
import 'bootstrap/dist/css/bootstrap.css';
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from 'react-bootstrap/Carousel';


function Testimonial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <section id="testimonials">
<div className="quote"><FontAwesomeIcon icon={faQuoteLeft}  style={{color: '#b28957', fontSize: "35px"}} />
 <h1>Dicono di noi</h1>
</div>
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel" >   
      <Carousel.Item className="carousel-item">
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} />
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} />
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} />
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} />
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} />
      <h2>Professionalità e gentilezza. Un semplice input ed ha subito capito quello che volevo.</h2>
      <img src="https://icon-library.com/images/google-user-icon/google-user-icon-7.jpg" className="testimonial-image" alt="dog-profile" />
      <em>Giacomo Capasso</em>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} />
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} /> 
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} />
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} /> 
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} />
      <h2 className="testimonial-text">E' il migliore!</h2>
      <img className="testimonial-image" src="https://icon-library.com/images/google-user-icon/google-user-icon-7.jpg" alt="lady-profile" />
      <em>Giuseppe Ciommiento</em>
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} />
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} />
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} />
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} />
      <FontAwesomeIcon icon={faStar}  style={{color: '#b28957', fontSize: "18px"}} />
      <h2 className="testimonial-text">Ottima esperienza. Molto pulito, molto bravo, cordiale e usa prodotti molto
                                       buoni! Ci tornerò!</h2>
      <img className="testimonial-image" src="https://icon-library.com/images/google-user-icon/google-user-icon-7.jpg" alt="lady-profile" />
      <em>Gabriele</em>
      </Carousel.Item>
    </Carousel>
    </section>
    </div>
  )
}

export default Testimonial
