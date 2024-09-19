import React, { useState, useEffect } from "react";
import "./home.scss";


//Image carousel
import image1 from "../../Assets/image 1.jpg";
import image2 from "../../Assets/Image 2.jpg";
import image3 from "../../Assets/Ireland scenic view.jpg";
import image4 from "../../Assets/iStock-1500563478.jpg";
import image5 from "../../Assets/thailand lantern.jpg";

//Icon import
import { IoLocationOutline } from "react-icons/io5";
import { HiFilter } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const images = [image1, image2, image3, image4, image5];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <img
        src={images[currentImageIndex]}
        alt="Rotating"
        className={`rotating-image ${fade ? "fade-in" : "fade-out"}`}
      />

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smalltext">Our Packages</span>
          <h1 data-aos="fade-up" className="homeTitle">Search your Holiday</h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination</label>
            <div className="textbox flex">
              <input type="text" placeholder="Enter name here..." />
              <IoLocationOutline />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="textbox flex">
              <input type="date" placeholder="" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="textbox flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className="icon" />
            <span>MORE FILTER</span>
          </div>
        </div>
        <div data-aos="fade-up" className="homeFooterIcon flex">
          <div className="rightIcons">
            <a href="https://www.facebook.com" target="_blank" rel="">
              <FaFacebook className="icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="">
              <FaTiktok className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
