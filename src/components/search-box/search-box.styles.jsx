import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  display: flex;
  margin-top:80px;
  width: 100%;
  background: linear-gradient(
    360deg,
    rgba(0, 1, 0, 32) 100%, /* Green color with 40% opacity */
    rgba(223,8, 0, 0) 230% /* Fully transparent green */
);
  border-radius: 3.91992px;
  padding: 10px;
  height: 100%;
  align-items: center;
  outline: none;
  font-size: 18px;
  border-radius: 5px;
  font-weight: bold;
 
  input {
    flex: 1;
    border: none;
    background: linear-gradient(
      180deg,
      rgba(21, 21, 221, 0.4) 0%,
      rgba(221, 221, 221, 0) 0%
    );
    color: white;
    outline: none;
    ${'' /* font-family: "Open Sans", sans-serif; */}
    font-size: 20px;
    font-weight: bold;

    /* Clear button styles */
    &::-webkit-search-cancel-button {
      size: 20px;
    }
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
  @media (max-width: 768px) {
    margin-top:80px;
    padding:20px;
    width: 100%;
    height: 20px;
    font-size: 14px;
  }
`;

export const SearchIcon = styled("i").attrs({ className: "fa fa-search" })`
  margin-right: 15px;
  color: #6e6f72;
`;
