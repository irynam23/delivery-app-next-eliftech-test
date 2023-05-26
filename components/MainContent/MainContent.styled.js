import styled from "styled-components";

export const StyledWrapper = styled.div`
  grid-area: main;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 20px;
  height: 100%;
  overflow-y: scroll;

  @media screen and (min-width: 768px) {
    padding: 10px;
  }

  @media screen and (min-width: 1200px) {
    padding: 20px;
  }
`;

export const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
    row-gap: 20px;
  }

  @media screen and (min-width: 1200px) {
    column-gap: 40px;
  }
`;
