import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Product from './Product'; // Assuming Product.js is in the same directory
import Searches from './Searches.js';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the search icon and times icon

// Import images
import image2 from './image2.jpg';
import image3 from './image3.avif';
import image4 from './image4.avif';
import image1 from './image1.avif';
import image5 from './image5.avif';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const products = [
    { id: 1, name: 'Sangria', img: image2, description: 'Embroided Net Sarees', price: 1299 },
    { id: 2, name: 'Sangria', img: image3, description: 'Embroided Net Sarees', price: 1299 },
    { id: 3, name: 'Sangria', img: image4, description: 'Embroided Net Sarees', price: 1299 },
    { id: 4, name: 'Sangria', img: image1, description: 'Embroided Net Sarees', price: 1299 },
    { id: 5, name: 'Sangria', img: image5, description: 'Embroided Net Sarees', price: 1299 },
    // ... more product data
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3, // Display three slides at a time
    slidesToScroll: 1, // Scroll one slide at a time
    swipe: true,
    swipeToSlide: true,
    draggable: true,
    centerMode: true, // Enable center mode
    centerPadding: '5%', // Adjust padding for partially visible previous and next slides
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

  return (
    <div className="page-container">
      <button onClick={toggleModal}>Open Popup</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
          <div className="one">
            <FontAwesomeIcon  icon={faTimes} className="close-icon" onClick={toggleModal} />
            <h3>Similar Products</h3>
            </div>
            <div className="similar-products">
              <div className="heading-container">
                
                
              </div>
              <Slider {...settings}>
                {products.map((product) => (
                  <Product key={product.id} {...product} />
                ))}
              </Slider>
              <div className="search-bar-container"> {/* Container for search bar and icon */}
                <input type="text" id="search" placeholder="Ask Cartesian" className="search-bar" />
                <FontAwesomeIcon icon={faSearch} className="search-icon" /> {/* Search icon */}
              </div>
              <h3 id="rs">Recent Searches</h3>
              <Searches />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
