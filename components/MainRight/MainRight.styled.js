import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid gray;
  border-radius: 20px;
  padding: 20px;
  overflow-y: hidden;
`;

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  max-height: 100%;
  overflow-y: scroll;
`;
