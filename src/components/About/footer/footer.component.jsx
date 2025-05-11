import {
  FooterContainer,
  FooterBox,
  CompanyInfo,
  BrandName,
  BrandSlogan,
  OtherLinks,
  SocialIcons,
  LinkBox,
} from "./footer.styles";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import TestUpload from "./uploadData";
const Footer = () => {
  return (
    <FooterContainer>
    {/* <TestUpload/> */}
      <FooterBox>
        <CompanyInfo>
          <BrandName>Vyarparbazar</BrandName>
          <BrandSlogan>Freshness delivered daily.</BrandSlogan>
          <SocialIcons>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="instagram_icon"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="twitter_icon"
              rel="noreferrer"
            >
              <Twitter />
            </a>
          </SocialIcons>
        </CompanyInfo>
        <OtherLinks>
          <LinkBox>
            <h3>Company</h3>
            <a>About</a>
            <a>Contact Us</a>
            <a>Careers</a>
          </LinkBox>
          <LinkBox>
            <h3>Legal</h3>
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
          </LinkBox>
        </OtherLinks>
      </FooterBox>
      <div style={{ textAlign: 'center', padding: '20px 0', fontSize: '14px', color: 'gray', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        Copyright reserved by<span style={{ fontSize: '16px', margin: '0 5px' }}>©</span> Vyarparbazar
      </div>
    </FooterContainer>
  );
};

export default Footer;
