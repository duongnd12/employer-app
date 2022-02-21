import styled, { css } from "styled-components";

export const SearchContainer = styled.div<{
  width?: number;
}>`
  ${({ width }) => css`
    width: 100%;
    font-family: "Inter";
  `}
`;

export const SearchBox = styled.div`
  ${() => css`
    width: 100%;
    height: 36px;
    border: none;
    background-color: #F6F6F9;
    border-radius: 8px;
    padding-left: 10px;
    display: flex;
    align-items: center;
  `}
`;

export const Input = styled.input`
  ${() => css`
    border: none;
    height: 20px;
    outline: none;
    font-size: 14px;
    padding-left: 10px;
    width: 100%;
    background-color: transparent;
  `}
`;

export const Icon = styled.img`
  ${() => css``}
`;
