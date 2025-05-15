import React from 'react';
import '../Home/Home.css';
import Joult from '../Assets/Joult.png';
import { FaStar } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        <div className="col-12 col-lg-6 mb-5 mb-lg-0">
          <div className="purple-badge d-flex align-items-center gap-2 mb-3">
            <span className="icon-circle d-flex rounded-2 p-2 justify-content-center align-items-center">
              <FaStar className='text-white' />
            </span>
            <span>4.5 | 1,000+ doses shipped safely</span>
          </div>

          <h1 className="fw-bold display-6">
            Lose weight Sustainably <br />
            <span className="text-purple">Without Dieting</span> or Guilt
          </h1>

          <p className="mt-3 text-muted w-100 w-md-75 w-lg-75 custom-mobile-center-text">
            Experience medically guided, once-weekly Semaglutide injections that curb hunger,
            boost metabolism, and help you lose weight fast and safely.
          </p>

          <div className="text-center text-md-start">
            <button className="check-eligibility rounded-5 btn text-light mt-3 px-4 py-2">
              Check eligibility
            </button>
          </div>

          <div className="ecg-line mt-lg-5 text-center">
            <svg
              className="ecg-svg"
              width="95%"
              height="100"
              viewBox="0 0 820 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                fill="none"
                stroke="#6A1B9A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="  0,50 20,50 25,35 30,65 35,45 40,55 45,30 50,70 55,50
        70,50 75,35 80,65 85,45 90,55 95,30 100,70 105,50
        120,50 125,35 130,65 135,45 140,55 145,30 150,70 155,50
        170,50 175,35 180,65 185,45 190,55 195,30 200,70 205,50
        220,50 225,35 230,65 235,45 240,55 245,30 250,70 255,50
        270,50 275,35 280,65 285,45 290,55 295,30 300,70 305,50
        320,50 325,35 330,65 335,45 340,55 345,30 350,70 355,50
        370,50 380,50 390,50 400,50 410,50 420,50 430,50 440,50
      "
              />
            </svg>
          </div>
        </div>

        <div className="col-12 col-lg-6 text-center position-relative">
          <div className="ellipse-bg"></div>
          <img src={Joult} alt="Product" className="product-img img-fluid position-relative z-2" />
          <div className="d-none d-md-block d-flex justify-content-center align-self-center circle-label top-left">Quick and <br /> Safe</div>
          <div className="d-none d-md-block circle-label top-right">Weight Lose</div>
          <div className="d-none d-md-block circle-label bottom-left">Goal weight Reached</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;