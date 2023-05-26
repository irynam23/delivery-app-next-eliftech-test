import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid black;
  border-radius: 20px;
  gap: 10px;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }

  @media screen and (min-width: 1200px) {
  }
`;

export const StyledImg = styled.div`
  width: 200px;

  & img {
    display: block;
    border-radius: 20px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
  }
`;

export const StyledName = styled.h4``;

export const StyledPrice = styled.h4``;

export const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: 1px solid gray;
  border-radius: 20px;
  gap: 20px;
`;

export const StyledSum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledArrows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const StyledBtn = styled.button`
  display: block;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const StyledDelete = styled.button`
  display: block;
  outline: none;
  padding: 5px;
  cursor: pointer;
`;
