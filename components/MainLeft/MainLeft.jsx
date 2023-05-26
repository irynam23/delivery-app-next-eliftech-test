import React from "react";
import {
  StyledInput,
  StyledItem,
  StyledList,
  StyledTitle,
  StyledWrapper,
} from "./MainLeft.styled";

export const MainLeft = ({ form }) => {
  return (
    <StyledWrapper>
      <form>
        <StyledList>
          <StyledItem>
            <StyledTitle>Name</StyledTitle>
            <StyledInput
              {...form.register("name", { required: true })}
            ></StyledInput>
          </StyledItem>
          <StyledItem>
            <StyledTitle>Email</StyledTitle>
            <StyledInput
              type="email"
              {...form.register("email", { required: true })}
            ></StyledInput>
          </StyledItem>
          <StyledItem>
            <StyledTitle>Phone</StyledTitle>
            <StyledInput
              type="number"
              {...form.register("phone", { required: true })}
            ></StyledInput>
          </StyledItem>
          <StyledItem>
            <StyledTitle>Address</StyledTitle>
            <StyledInput
              {...form.register("address", { required: true })}
            ></StyledInput>
          </StyledItem>
        </StyledList>
      </form>
    </StyledWrapper>
  );
};
