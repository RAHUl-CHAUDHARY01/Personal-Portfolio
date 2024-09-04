import { useEffect, useState } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
export default function Navbar() {
  const [opaque, setOpaque] = useState(false);
  useEffect(() => {
    window.onscroll = (event) => {
      // console.log(window.scrollY);
      if (window.scrollY > 220) {
        setOpaque(true);
      } else {
        setOpaque(false);
      }
    };
  }, []);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [closingAnimation, setClosingAnimation] = useState(false);
  const handleToggleClick = () => {
    setMobileNavOpen(!mobileNavOpen);
    setClosingAnimation(false);
  };

  // const handleCloseClick = () => {
  //   setMobileNavOpen(false);
  // };

  const handleCloseClick = () => {
    setClosingAnimation(true);
    setTimeout(() => {
      setMobileNavOpen(false);
      setClosingAnimation(false);
    }, 500); // Adjust timeout to match animation duration
  };

  const handleNavItemClick = () => {
    // Close mobile nav on any nav item click
    setMobileNavOpen(false);
  };

  return (
    <>
      <div
        className={`navbar-container flex justify-between items-center h-14 px-48 py-10 md:px-24 ${
          opaque && "bg-slate-950"
        }`}
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "10000",
        }}
      >
        <div className="my-logo font-medium text-white">Rahul Kumar</div>
        <div className="toggle-icon text-white" onClick={handleToggleClick}>
          {mobileNavOpen ? (
            <i className="fa-solid fa-xmark"></i> // Cross icon for closing
          ) : (
            <i className="fa-solid fa-bars"></i> // Bar icon for opening
          )}
        </div>

        <div className="nav-links flex font-medium text-white justify-around gap-8">
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/about" className="about">
            About
          </Link>
          <Link to="/skills" className="skill">
            Skills
          </Link>
          <Link to="/projects" className="project">
            Projects
          </Link>
          
          <Link to="/contact" className="publication">
            Contact
          </Link>
        </div>
      </div>

      <div
        className={`mobile-nav bg-slate-950 px-12 py-6 h-screen w-screen ${
          mobileNavOpen
            ? "slide-in-from-left block"
            : closingAnimation
            ? "slide-out-to-right" // Use 'slide-out-to-right' for right slide out:
            : " hidden"
        }`}
        style={{ zIndex: 1000, position: "fixed" }}
      >
        {/* <div className="flex justify-between">
          <div className="my-logo font-medium text-white mb-6">SG</div>
          <div
            className="close-btn text-white text-xl"
            onClick={handleCloseClick}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div> */}
        <div className="nav-links-mobile flex flex-col font-small text-white justify-around gap-4 mt-10">
          <Link to="/" className="home" onClick={handleNavItemClick}>
            Home
          </Link>
          <Link
            to="/about"
            className="about"
            onClick={handleNavItemClick}
          >
            About
          </Link>
          <Link
            to="/skills"
            className="skill"
            onClick={handleNavItemClick}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="workex"
            onClick={handleNavItemClick}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="certification"
            onClick={handleNavItemClick}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}