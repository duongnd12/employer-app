import styled, { css } from "styled-components";

export const DetailContainer = styled.div`
  ${() => css`
    box-sizing: border-box;
    padding: 0;
  `}
`;

export const Heading = styled.h3`
  ${() => css`
    margin: 20px 10px 10px;
  `}
`;

export const Content = styled.div`
    ${() => css`
        margin-left: 15px;
        margin-right: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    `}
`

export const Tag = styled.div`
    ${() => css`
        display: flex;
        align-items: baseline;
    `}
`
export const SubHr = styled.hr`
  ${() => css`
    width: 94%;
    opacity: 0.3;
  `}
`
export const OrtherService = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  `}
`

export const Hr = styled.hr`
  ${() => css`
    width: 100%;
    opacity: 0.3;
  `}
`
