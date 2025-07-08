import React from "react";
import "./Footer.css";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const fot = useLocation()
  console.log("fot", fot);

  if (fot.pathname == "/login") {
    return null;
  }

  if (fot.pathname == "/register") {
    return null;
  }
  if (fot.pathname == "/getstart") {
    return null;
  }
  return (
    <footer>
      <div className="foot">
        <div>
          <p>Brahma Rupa Secondary school </p>
          <p> Pokhara-32 Rajakochautara kaski.</p>
          <p>061-410055, 410057</p>
          <a target="_blank" href="http://www.brhss.edu.np">
            www.brhss.edu.np
          </a>
          <p>
            brahmarupahss13@gmail.com
          </p>
          <p>
            &copy; 2024 Brahma Rupa Secondary School, Rajakochautara |All right reserved.
          </p>
          <p>
          Designed & Developed By: Aashraya Ghimire, Rishi Malla, Nisha Sunar, Nishan Sunar & Pramish Shahi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
