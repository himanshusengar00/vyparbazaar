import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  margin-top: 0px;
  margin-bottom: 30px;
  position: relative;

  .carousel-button {
    width: 15%;
    height: 10%;
    position: relative;
    left: 50%;
    position: absolute;
    top: 76%; /* Vertically center the button */
    transform: translate(-50%, -50%);
    background: #000000;
    border-radius: 10px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 150%;
    line-height: 45px;
    overlay: hidden;
    letter-spacing: -0.05em;
    color: #ffffff;
  }
  @media (max-width: 800px) {
    width: 90%;
    margin-bottom: 10px;
    .carousel-button {
      width: 90px;
      height: 40px;
      position: relative;
      left: 50%;
      position: absolute;
      top: 55%; /* Vertically center the button */
      transform: translate(-50%, -50%);
      background: black;
      font-size: 13px;
      line-height: 10px;
      color: #ffffff;
      border:none;
    }
  }
`;
