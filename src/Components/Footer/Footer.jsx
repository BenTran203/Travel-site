import React from "react";
import "./footer.scss";
import video from "../../Assets/video1.mp4";

import { FiSend } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="video-div">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="second-content container">
        <div className="contact-div flex">
          <div data-aos="fade-up"  className="text">
            <small>KEEP IN TOUCH</small>l<h2>Travel with us</h2>
          </div>

          <div data-aos="fade-up" className="input-div flex">
            <input 
              type="text"
              placeholder="Enter Email address"
              value=""
            ></input>
            <button className="btn flex" type="submit">
              SEND
              <FiSend />
            </button>
          </div>
        </div>
        <div data-aos="fade-up"  className="footer-card flex">
          <div className="footer-intro flex">
            <div className="logo-div">
              <a href="" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> Aussie Vacay.
              </a>
            </div>
            <div className="footer-para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nostrum quidem fugiat! Veritatis autem tenetur, non accusantium fugiat quisquam dolor similique necessitatibus voluptate numquam labore blanditiis maiores voluptates modi expedita?
            </div>
            <div className="footer-socials flex">
            <FaFacebook className="icon"/>
            <FaXTwitter className="icon"/>
            <FaInstagram className="icon"/>
            <FaYoutube className="icon"/>
            </div>
          </div>

          <div className="footer-links grid">

            {/* Group 1 */}
            <div data-aos="fade-up" 
              data-aos-duration="3000"
             className="link-group">
              <span className="group-title">
                OUR AGENCY
              </span>

              <li className="footer-list flex">
              <FiChevronRight className="icon" />
              Services
              </li>  

              <li className="footer-list flex">
              <FiChevronRight className="icon" />
              Insurance
              </li>

              <li className="footer-list flex">
              <FiChevronRight className="icon" />
              Agency
              </li>

              <li className="footer-list flex">
              <FiChevronRight className="icon" />
              Tourism
              </li>

              <li className="footer-list flex">
              <FiChevronRight className="icon" />
              Payment
              </li>

            </div>

            {/* Group2 */}
            <div data-aos="fade-up" 
              data-aos-duration="4000"
              className="link-group">
              <span className="group-title">
                PARTNERS
              </span>

              <li className="footer-list flex">
              <FiChevronRight className="icon" />
              Bookings
              </li>  

              <li className="footer-list flex">
              <FiChevronRight className="icon" />
              DiDi
              </li>

              <li className="footer-list flex">
              <FiChevronRight className="icon" />
              Lodgify
              </li>

              <li className="footer-list flex">
              <FiChevronRight className="icon" />
              Trivago
              </li>

              <li className="footer-list flex">
              <FiChevronRight className="icon" />
              TripAdvisor
              </li>

            </div>
          </div>

          
        </div>
        <div  data-aos="fade-up"  className="footer-div">
            <small>TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RESEVERD - BENTRAN-2024</small>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
