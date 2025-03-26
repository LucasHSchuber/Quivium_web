import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
// import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons'; 
// import { faInstagram, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import ContactModal from "../components/contactModal"

import logo_desktop from "../images/q_green.png"
import logo_mobile from "../images/letter-q.png"

import "../css/components.css";


export default function Header() {
 // define  states
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1956);
  const [showContactModal, setShowContactModal] = useState(false);

  const onCloseContactModal = () => {setShowContactModal(false)}
  const onSuccessContactModal = () => {setShowContactModal(false)}

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1956);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    console.log('isMobile', isMobile);
  }, [isMobile]);
  
  useEffect(() => {
    console.log('isOpen', isOpen);
  }, [isOpen]);


  return (
    <div>
        <header className={`header-wrapper ${isMobile ? "mobile-wrapper" : ""}`}>
            <div className="d-flex justify-content-between">
                {/* Logo */}
                <Link to="/" title="Quivium" className="d-flex">
                    <img className="header-logo" src={isMobile ? logo_mobile : logo_desktop} alt="Quivium Logo" />
                    <span className="header-logo-link">Quivium</span>
                </Link>

                <div>
                    {!isMobile && (
                        <nav className={`${isMobile ? "desktop-nav-hidden" : "desktop-nav"}`}>
                            <Link to="/about" className="header-link">About</Link>
                            <Link to="/versions" className="header-link">Versions</Link>
                            <Link to="#" className="header-link" onClick={() => setShowContactModal(!showContactModal)}>Contact</Link>
                        </nav>
                    )}

                    {/* Mobile Menu Button */}
                    {isMobile && (
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="hamburger-menu-button"
                        >
                            {isOpen ? <FontAwesomeIcon size="2x" icon={faXmark} /> : <FontAwesomeIcon size="2x" icon={faBars} />
                        }
                        </button>
                    )}
                </div>
            </div>
        </header>

        {/* Mobile Menu */}
        {isMobile && isOpen && (
            <motion.nav
                className="mobile-nav"
                initial={{ height: 0, opacity: 0 }}
                animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div>
                    <Link to="/" className="header-link-mobile" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" className="header-link-mobile" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/versions" className="header-link-mobile" onClick={() => setIsOpen(false)}>Versions</Link>
                    <Link to="#" className="header-link-mobile" onClick={() => {setIsOpen(false); setShowContactModal(!showContactModal)}}>Contact</Link>
                </div>
            </motion.nav>
        )}

        < ContactModal showContactModal={showContactModal} onClose={onCloseContactModal} onSuccess={onSuccessContactModal} /> 

    </div>
    
  );
}
