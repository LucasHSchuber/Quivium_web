import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/q_green.png"; 
import "../css/components.css"; 

import ContactModal from "../components/contactModal"

const Footer = () => {
  // define states
  const [showContactModal, setShowContactModal] = useState(false);

  const onCloseContactModal = () => {setShowContactModal(false)}
  const onSuccessContactModal = () => {setShowContactModal(false)}


  return (
    <div>
        <footer className="footer">
          {/* Logo centered */}
          <div className="mb-5 footer-logo">
            <img src={logo} alt="Quivium Logo" />
          </div>

          {/* Vertical menu */}
          <nav className="d-flex footer-nav">
            <div>
                <NavLink to="/about" className="footer-link">
                About
                </NavLink>
            </div>
            <div>
                <NavLink to="/versions" className="footer-link">
                Versions
                </NavLink>
            </div>
            <div>
                <NavLink to="#" className="footer-link" onClick={() => setShowContactModal(!showContactModal)}>
                Contact
                </NavLink>
            </div>
          </nav>

          <div className="mt-5">
            <h6>© 2025 Quivium. Some rights reserved.  </h6>
          </div>
        </footer>
        
    < ContactModal showContactModal={showContactModal} onClose={onCloseContactModal} onSuccess={onSuccessContactModal} /> 
    </div>
  );
};

export default Footer;
