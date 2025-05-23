import styled from "styled-components";

export const DirectoryContainer = styled.div`
  font-family: "Poppins", sans-serif;
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const DirectoryTitle = styled.div`
  width: 26%;
  margin-bottom: 0px;
  ${'' /* background: url("https://i.ibb.co/r2g55k6/vector.png") no-repeat; */}
  background-size: 70% 50%;
  background-position: bottom 5px right 7px;
  h1 {
    font-size: 1.7em;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 1.3em;
    }
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const DirectoryItems = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;
