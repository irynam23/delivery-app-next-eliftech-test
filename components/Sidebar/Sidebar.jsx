import React, { useContext } from "react";
import {
  StyledBtn,
  StyledItem,
  StyledList,
  StyledTitle,
  StyledWrapper,
} from "./Sidebar.styled";

import { CartContext } from "../../lib/context";

export const Sidebar = ({ shops, handleShopClick }) => {
  const { chosenShop } = useContext(CartContext);

  return (
    <StyledWrapper>
      <StyledTitle>Shops:</StyledTitle>
      <StyledList>
        {shops.map((shop) => (
          <StyledItem key={shop}>
            <StyledBtn
              disabled={chosenShop && chosenShop !== shop}
              onClick={() => handleShopClick(shop)}
            >
              {shop}
            </StyledBtn>
          </StyledItem>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};
