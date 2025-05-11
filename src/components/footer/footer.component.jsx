import {
  FooterContainer,
  FooterBox,
  CompanyInfo,
  BrandName,
  BrandSlogan,
  OtherLinks,
  SocialIcons,
  LinkBox
} from "./footer.styles";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { Link } from "react-router-dom";
import AboutUs from "../../components/Aboutt/aboutVyaapaar";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <CompanyInfo>
          <BrandName>Vyparbazaar</BrandName>
          <BrandSlogan>Freshness delivered daily.</BrandSlogan>
          <SocialIcons>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="instagram_icon"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="twitter_icon"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <Twitter />
            </a>
          </SocialIcons>
        </CompanyInfo>
        <OtherLinks>
          <LinkBox>
            <h3>Company</h3>
            <Link to="/aboutVyaapaar">About us</Link>
          </LinkBox>
          <LinkBox>
            <h3>Contact Us</h3>
            <a href="tel:+919999760376" style={{ color: 'green' }}>+91-9999760376</a>
          </LinkBox>
        </OtherLinks>
      </FooterBox>
      <div
        style={{
          textAlign: "center",
          padding: "20px 0",
          fontSize: "14px",
          color: "black",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        All rights reserved
        <span style={{ fontSize: "16px", margin: "0 5px" }}>©2024</span>
        Vyparbazaar
      </div>
    </FooterContainer>
  );
};

export default Footer;
