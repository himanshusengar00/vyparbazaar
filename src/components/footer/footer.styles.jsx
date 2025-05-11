import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #f8f9fa; /* Soft light gray for a clean look */
  color: #333;
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-family: "Roboto", sans-serif;
  border-top: 1px solid #e0e0e0;
`;

export const FooterBox = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const CompanyInfo = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content */
  justify-content: center; /* Vertically center the content */
  text-align: center; /* Center the text */

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

export const BrandName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #2e7d32; /* Slightly darker green */
  text-align: center;
`;

export const BrandSlogan = styled.p`
  font-size: 18px;
  color: #4caf50;
  margin-top: 10px; /* Ensure it's below the brand name */
  text-align: center;
  margin-bottom: 30px;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e0e0e0;
    border-radius: 50%;
    padding: 10px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #1da1f2;
      transform: scale(1.1);
    }

    svg {
      width: 24px;
      height: 24px;
      fill: white;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const OtherLinks = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const LinkBox = styled.div`
  h3 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #333;
  }

  a {
    display: block;
    font-size: 16px;
    margin: 6px 0;
    color: #555;
    text-decoration: none;
    transition: color 0.3s ease, padding-left 0.3s ease;

    &:hover {
      color: #2e7d32;
      padding-left: 8px;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const CopyRightText = styled.div`
  font-size: 14px;
  color: #777;
  text-align: center;
  border-top: 1px solid #ddd;
  padding-top: 20px;
  width: 100%;

  span {
    margin-left: 5px;
    font-size: 16px;
    font-weight: 500;
  }
`;
