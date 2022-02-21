import styled, { css } from "styled-components";

export const RateContainer = styled.div<{
  width?: number;
}>`
  ${({ width }) => css`
    width: ${width}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
  `}
`;

export const RateResult = styled.div`
  ${() => css`
    display: flex;
  `}
`;

export const Star = styled.div``;

export const StarContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
  `}
`;

export const Oders = styled.p`
  ${() => css`
    margin-left: 10px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
  `}
`;

export const Action = styled.div``;

export const Icon = styled.img``;
