import styled from "styled-components";

export const StyledWrapper = styled.div`
  grid-area: sidebar;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 20px;
`;

export const StyledTitle = styled.h4``;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
  gap: 5px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const StyledItem = styled.li``;

export const StyledBtn = styled.button`
  display: block;
  outline: none;
  padding: 5px;
  cursor: pointer;
`;
