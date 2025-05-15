import React, { useState } from "react";
import "../Home/Home.css";

const WeightLossCalculator = () => {
    const [weight, setWeight] = useState(140);
    const calculatedLoss = Math.floor(weight * 0.2);

    return (
        <div className="weight-container container my-5 py-4 rounded-4">
            <div className="row align-items-center">
                {/* Left Section */}
                <div className="col-md-6 text-center text-md-start px-4">
                    <h2 className="fw-bold mb-3">Discover how much weight you could lose</h2>
                    <p className="text-muted col-lg-7 mb-4 col-">
                        Get a quick snapshot of your current BMI and see how Joult's Semaglutide Program can help you reach a healthier weight—no guesswork needed.
                    </p>

                    <button className="btn btn-primary rounded-pill px-4 py-2" style={{ background: " #AD00D0", border: "none" }}>
                        Get Started
                    </button>
                </div>

                {/* Right Section */}
                <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
                    <div className="weight-box p-4 rounded-4 shadow text-center">
                        <div className="weight-values mb-3">
                            <div className="fw-bold small fs-2" style={{ opacity: 0.4, color: "#C900E6" }}>
                                {parseInt(weight) - 2} lbs
                            </div>
                            <div className="fw-bold small fs-3" style={{ opacity: 0.7, color: "#C900E6" }}>
                                {parseInt(weight) + 1} lbs
                            </div>
                            <div className="fw-bold fs-4" style={{ color: "#C900E6" }}>
                                {weight} lbs
                            </div>
                        </div>

                        <p className="mb-1">Select your current weight</p>
                        <input
                            type="range"
                            min="100"
                            max="300"
                            value={weight}
                            className="custom-range"
                            onChange={(e) => setWeight(e.target.value)}
                            style={{
                                backgroundSize: `${((weight - 100) / 200) * 100}% 100%`
                            }}
                        />

                        <div className="display-6 fw-bold mt-3" style={{ color: "#AD00D0" }}>
                            {calculatedLoss} lbs
                        </div>
                        <p className="text-dark">
                            Weight you could lose <br />
                            <a style={{ fontSize: "10px" }}
                                href="#"
                                className="text-primary text-decoration-none small"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                *using JOULT's 3 month plan
                            </a>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeightLossCalculator;