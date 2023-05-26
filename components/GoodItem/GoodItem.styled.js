import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
  gap: 10px;
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

export const StyledBtn = styled.button`
  display: block;
  outline: none;
  padding: 5px;
  cursor: pointer;
  margin-left: 40%;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1200px) {
    margin-left: 60%;
  }
`;
