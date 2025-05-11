import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 120px;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 20%;
`;

export const CartItemDetails = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const CartItemName = styled.span`
  font-size:13px;
  color:black;
`;

export const CartItemPrice = styled.span`
  font-size: 12px;
  color: #888;
`;
