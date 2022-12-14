import tiktlogo from "./png/ticlogo.png";
import { Link, Outlet } from "react-router-dom";
import "./style/layout.css";

export default function Layout() {
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="navleft">
          <div className="leftdiv">
            <img className="tikt-logo" src={tiktlogo} alt="ticket logo"></img>
          </div>
        </div>
        <div className="navright">
          <div className="rightdiv">
            <span className="span-home" id="navspan">
              <Link to="/test-react">Home</Link>
            </span>
            <span className="span=about" id="navspan">
              <Link to="about">About</Link>
            </span>
            <span className="span-contact" id="navspan">
              <Link to="contact">Contact</Link>
            </span>
            <button className="book-button" id="navspan">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
