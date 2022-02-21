import styled, { css } from "styled-components";

export const TextFieldContainer = styled.div<{
  width?: number
}>`
  ${({width}) => css`
  width: ${width}px;
    border-radius: 4px;
    background: white;
  `}
`;

export const Title = styled.div`
  ${() => css`
    margin-bottom: 5px;
    font-size: 14px;
    font-family: sans-serif;
  `}
`;

export const Input = styled.input`
  ${() => css`
    border: none;
    outline: none;
    background: transparent;
    width: 100%;

    color: black;
    &::placeholder {
      color: lightgray;
    }
  `}
`;

export const Box = styled.div<{
  status?: "error" | "success" | "disabled" | "normal";
}>`
  ${({ status }) => css`
    width: 100%;
    display: inline-flex;
    align-items: center;
    padding: 6px;
    border-radius: 4px;
    border: 1px solid lightgray;
    height: 40px;
    box-sizing: border-box;
    ${status &&
    status === "disabled" &&
    css`
      border: 1px solid #a5a5ba;
      background: #f6f6f9;
      user-select: none;
      pointer-events: none;
    `}

    ${status &&
    status === "success" &&
    css`
      border: 1px solid #10b981;
      background: #fff;
    `}

    ${status &&
    status === "error" &&
    css`
      border: 1px solid #ef4444;
      background: #fff;
    `}
  `}
`;
export const Icon = styled.img``;
