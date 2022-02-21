import styled, { css } from "styled-components";

export const ProfileContainer = styled.div`
  ${() => css`
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `}
`;

export const Heading = styled.h3`
  ${() => css`
    margin-top: 10px;
  `}
`;

export const Item = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `}
`;

export const Title = styled.h4``;

export const Photograph = styled.div`
  ${() => css`
    display: flex;
    gap: 10px;
  `}
`;

export const Name = styled.div`
  ${() => css`
    display: flex;
    gap: 10px;
  `}
`;

export const CityAndZip = styled.div`
  ${() => css`
    display: flex;
    gap: 10px;
  `}
`;

export const Date = styled.div``

export const TitleDate = styled.div`
  ${() => css`
    margin-bottom: 5px;
    font-size: 14px;
    font-family: sans-serif;
  `}
`;

export const Header = styled.div`
    ${() => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `}
`