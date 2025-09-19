import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Top Logos Row */}
      {/* <div className="footer-logos">
        <img
          src="https://via.placeholder.com/100x50?text=ADOBE+HOMES"
          alt="Adobe Homes"
        />
        <img
          src="https://via.placeholder.com/100x50?text=AA+BUILDERS"
          alt="AA Builders"
        />
        <img
          src="https://via.placeholder.com/100x50?text=THE+CAPITAL"
          alt="The Capital"
        />
        <img
          src="https://via.placeholder.com/100x50?text=ROSEWOOD+HOMES"
          alt="Rosewood Homes"
        />
        <img
          src="https://via.placeholder.com/100x50?text=IRONWOOD"
          alt="Ironwood"
        />
      </div> */}

      {/* Main Footer Content */}
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-col">
          <h4>Contact Info</h4>
          <p>
            3015 Grand Ave, Coconut Grove,
            <br />
            Merrick Way, FL 12345
          </p>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@yourwebsite.com</p>
        </div>

        {/* Property Types */}
        <div className="footer-col">
          <h4>Property Types</h4>
          <ul>
            <li>Commercial</li>
            <ul>
              <li>Office</li>
              <li>Shop</li>
            </ul>
            <li>Residential</li>
            <ul>
              <li>Apartment</li>
              <li>Apartment Building</li>
              <li>Condominium</li>
              <li>Single Family Home</li>
              <li>Villa</li>
            </ul>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h4>Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Sign up</button>
          </form>
        </div>

        {/* Recent Posts */}
        <div className="footer-col">
          <h4>Recent Posts</h4>
          <ul>
            <li>Standard Blog Post With Featured Image</li>
            <li>Example Post With Gallery Post Format</li>
            <li>Example Post With Image Post Format</li>
            <li>Lorem Ipsum Dolor Sit Amet</li>
            <li>Example Video Blog Post</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <p>A Theme by Inspiry Themes</p>
      </div>

      {/* Background Skyline */}
      {/* <div className="footer-skyline"></div> */}
    </footer>
  );
}


export default Footer;
