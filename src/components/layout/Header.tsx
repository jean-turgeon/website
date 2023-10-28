import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Welcome here!</h1>
    </StyledHeader>
  );
};

export default Header;
