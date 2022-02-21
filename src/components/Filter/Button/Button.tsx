import { useState } from "react";
import React from "react";
import styled, { css } from "styled-components";

const Button = ({ title }: { title: string }) => {
  const [isActive, setActive] = useState(false);
  const handleButtonClick = () => {
    setActive(!isActive);
  };
  return (
    <ButtonStyled isActive={isActive} onClick={handleButtonClick}>
      {title}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<{ isActive?: boolean }>`
  ${({ isActive }) => css`
    padding: 8px;
    margin: 5px;
    border: none;
    border-radius: 4px;
    ${isActive &&
    css`
      color: #4945ff;
      background-color: #fff;
      border: 1px #4945ff solid;
    `}
  `}
`;

export default Button;
