import React from "react";
import styled from "styled-components";
import { MainLeft } from "../components/MainLeft/MainLeft";
import { MainRight } from "../components/MainRight/MainRight";
import { useForm } from "react-hook-form";

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    height: calc(100vh - 84px);
    width: 768px;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export default function Cart() {
  const form = useForm({ reValidateMode: "onBlur" });
  return (
    <StyledWrapper>
      <MainLeft form={form} />
      <MainRight form={form} />
    </StyledWrapper>
  );
}
