import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #f4f4f4;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  position: relative;
  bottom: 0;
  font-family: 'Roboto', sans-serif;
`;

export const FooterBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-bottom: 40px;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
`;

export const CompanyInfo = styled.div`
  width: 25%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const BrandName = styled.span`
  font-size: 30px;
  font-weight: bold;
  color: #2d2d2d;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const BrandSlogan = styled.span`
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const SocialIcons = styled.div`
  a {
    display: inline-block;
    margin-right: 15px;
    transition: transform 0.3s ease;
    color: #333;

    &:hover {
      transform: scale(1.2);
      color: #3f3f3f;
    }
  }

  @media (max-width: 768px) {
    margin-top: 15px;

    a {
      margin-right: 10px;
    }
  }
`;

export const OtherLinks = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const LinkBox = styled.div`
  h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
    font-weight: 600;
  }

  a {
    display: block;
    margin: 10px 0;
    color: #555;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #e76f51;
    }
  }

  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    text-align: center;

    h3 {
      font-size: 16px;
    }

    a {
      font-size: 14px;
    }
  }
`;

export const CopyrightText = styled.div`
  text-align: center;
  font-size: 14px;
  color: #777;
  margin-top: 20px;

  span {
    font-size: 16px;
    color: #333;
  }
`;
