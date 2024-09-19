import React from "react";
import "./main.scss";

import img1 from "../../Assets/Opera House.jpg";
import img2 from "../../Assets/Great Barrier Reef.jpg";
import img3 from "../../Assets/Uluru.jpg";
import img4 from "../../Assets/Great Ocean Road.jpg";
import img5 from "../../Assets/Bondi Beach.jpg";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    desTitle: "Sydney Opera House",
    location: "Bennelong Point, Sydney NSW 2000, Australia",
    fees: "$42 for adults, $22 for children (Tour Fees)",
    description:
      "The Sydney Opera House is one of the 20th century’s most famous and distinctive buildings, located on the stunning Sydney Harbour. It’s a must-see for travelers with tours, performances, and dining experiences.",
  },
  {
    id: 2,
    imgSrc: img2,
    desTitle: "Great Barrier Reef",
    location: "Cairns, Queensland, Australia",
    fees: "$100 to $250 for diving tours",
    description:
      "The Great Barrier Reef is the world’s largest coral reef system, stretching over 2,300 kilometers. It’s a UNESCO World Heritage site and a top destination for snorkeling and scuba diving.",
  },
  {
    id: 3,
    imgSrc: img3,
    desTitle: "Uluru (Ayers Rock)",
    location: "Uluru-Kata Tjuta National Park, Northern Territory, Australia",
    fees: "$38 for a 3-day park pass",
    description:
      'Uluru is a massive sandstone monolith in the heart of the Northern Territory’s arid "Red Centre." It’s sacred to Indigenous Australians and known for its shifting colors at sunrise and sunset.',
  },
  {
    id: 4,
    imgSrc: img4,
    desTitle: "Great Ocean Road",
    location: "Victoria, Australia",

    fees: "Free (Self-Drive), $50 to $150 for guided tours",
    description:
      "The Great Ocean Road is an iconic coastal drive stretching 243 kilometers along the southeastern coast of Australia. Famous for the Twelve Apostles rock formations and scenic views.",
  },
  {
    id: 5,
    imgSrc: img5,
    desTitle: "Bondi Beach",
    location: "Bondi, Sydney NSW 2026, Australia",

    fees: "Free (Beach Access), $20 to $60 for surfing lessons",
    description:
      "Bondi Beach is one of the world’s most famous beaches, known for its golden sands and surfing waves. It’s a vibrant spot for both locals and tourists, offering various beachfront cafes and events.",
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="sec-title">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="sec-content grid">
        {Data.map(
          ({ id, imgSrc, desTitle, location, grade, fees, description }) => {
            return (
              <div className="single-destination">
                <div className="image-div">
                  <img src={imgSrc} alt={desTitle}></img>
                </div>
                <div className="card-info">
                  <h4 className="destination-title">{desTitle}</h4>
                  <span className="location">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade"></div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="description">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
