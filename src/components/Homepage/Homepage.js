import state from "../../assets/10 state-1.jpg";
import React from "react";
import "./Homepage.css"; // Import CSS for styling
import Supp from "../../assets/supp.jpg";
import reseller from "../../assets/reseller.jpg";
import tonnage from "../../assets/tonnage.jpg";
import quality from "../../assets/quality.jpg";
import AboutUs from "../Aboutt/aboutVyaapaar";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>
            Connecting{" "}
            <span className="highlight-green">Suppliers</span> and{" "}
            <span className="highlight-green">Consumers</span> with Quality
            Products
          </h1>
          <button className="cta-button">Contact Us</button>
        </div>
        <div className="hero-image">
          <img src={Supp} alt="hero" />
        </div>
      </header>

      {/* Stats Section */}
      <section id="stats" className="stats-section">
        <h2 className="section-title">Our Achievements at a Glance</h2>
        <div className="stats-cards">
          {/* Individual Stat Card */}
          <div className="stat-card">
            <img src={state} alt="States Served" />
            <h3>10 States Served</h3>
            <p>Delivering quality products across 10 states.</p>
          </div>
          <div className="stat-card">
            <img src={reseller} alt="Resellers" />
            <h3>5,000+ Resellers</h3>
            <p>Collaborating with over 5,000 dedicated resellers.</p>
          </div>
          <div className="stat-card">
            <img src={tonnage} alt="Tons Delivered" />
            <h3>30,000 Tons Delivered</h3>
            <p>Managing 30,000 tons of goods monthly.</p>
          </div>
          <div className="stat-card">
            <img src={quality} alt="Commitment to Quality" />
            <h3>Commitment to Quality</h3>
            <p>Upholding the highest standards in the supply chain.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "Vyparbazaar has transformed our supply chain operations. Their
              commitment to quality is unmatched!"
            </p>
            <div className="testimonial-rating">
              <span>⭐⭐⭐⭐⭐</span>
              <p>- Rajesh K., Reseller</p>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              "Reliable, efficient, and always on time. Vyparbazaar is a true
              partner to farmers and suppliers."
            </p>
            <div className="testimonial-rating">
              <span>⭐⭐⭐⭐⭐</span>
              <p>- Manish G., Farmer</p>
            </div>
          </div>
          <div className="testimonial-card">
            <p>
              "Thanks to Vyparbazaar, we have seen consistent growth in sales.
              Their reach is incredible."
            </p>
            <div className="testimonial-rating">
              <span>⭐⭐⭐⭐⭐</span>
              <p>- Deepak T., Supplier</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs />
    </div>
  );
};

export default HomePage;
