import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home/Home.css';
import { FaBars } from 'react-icons/fa';

const Navigate = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="custom-navbar">
      <div className="navbar-content d-flex justify-content-between align-items-center py-3 px-3 px-md-5">
        <div className="logo fw-bold fs-4 text-purple">JOULT</div>

        <div className="d-md-none" onClick={() => setShowMenu(!showMenu)} style={{ cursor: 'pointer' }}>
          <FaBars size={24} />
        </div>

        {/* Desktop links/buttons */}
        <div className="d-none d-md-flex align-items-center gap-4">
          <div className="nav-links d-flex gap-4">
            <a href="#home" className="text-decoration-none text-dark">Home</a>
            <a href="#reviews" className="text-decoration-none text-dark">Reviews</a>
            <a href="#contact" className="text-decoration-none text-dark">Contact Us</a>
            <a href="#faq" className="text-decoration-none text-dark">FAQs</a>
          </div>
          <div className="nav-buttons d-flex gap-3 ms-4">
            <button className="btn btn-outline fw-bold rounded-pill px-3 py-1" style={{ border: "1px solid #8400B0" }}>
              Sign In
            </button>
            <button className="check-eligibility btn text-light fw-bold rounded-pill px-3 py-1">
              Am I Eligible?
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div
          ref={menuRef}
          className="d-md-none text-center bg-white pb-3 rounded-5 text-dark"
        >
          <div className="nav-links d-flex flex-column gap-2">
            <a href="#home" className="text-decoration-none fw-bold text-dark">Home</a>
            <a href="#reviews" className="text-decoration-none fw-bold text-dark">Reviews</a>
            <a href="#contact" className="text-decoration-none fw-bold text-dark">Contact Us</a>
            <a href="#faq" className="text-decoration-none fw-bold text-dark">FAQs</a>
          </div>

          <div className="nav-buttons d-flex flex-column gap-2 mt-3">
            <div className="d-flex justify-content-center">
              <button className="btn btn-outline-light w-50 text-dark fw-bold rounded-pill px-4 py-1" style={{ border: "1px solid #8400B0" }}>
                Sign In
              </button>
            </div>

            <div className="d-flex justify-content-center">
              <button className="check-eligibility w-50 btn btn-dark fw-bold rounded-pill px-4 py-1 text-white">
                Am I Eligible?
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navigate;