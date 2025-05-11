// AboutUs.js
import React from "react";
import aboutVya from "../../assets/aboutvyaapar.jpeg";
import "./AboutUs.css"; // Ensure you have CSS specific to the AboutUs component

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <img src={aboutVya} alt="about us" className="about-image" />
      <div className="about-content">
        <section>
          <h2>About Vyparbazaar</h2>
          <p>
            Vyparbazaar is a trusted leader in the trading and distribution of
            FMCG and agricultural products across India. Committed to high
            standards of quality and sustainability, the company ensures a
            seamless supply chain from farm to market.
          </p>
        </section>

        <section>
          <h2>Trust and Transparency</h2>
          <p>
            At Vyparbazaar trust and
            transparency are the foundations of our operations in the
            distribution of FMCG and agricultural products. We believe that
            trust is built through reliable service, ethical sourcing, and clear
            communication with all stakeholders—from suppliers to customers.
          </p>
        </section>

        <section>
          <h2>Industry Leadership</h2>
          <p>
            Vyparbazaar continues to lead the way in the FMCG and agricultural
            trading sectors, ensuring consistent quality and customer
            satisfaction across India.
          </p>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
