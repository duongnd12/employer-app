import styled, { css } from "styled-components";

export const ProfileContainer = styled.div<{
    width?: number;
}>`
  ${({width}) => css`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    width: ${width}px;
    background-color: #fff;
  `}
`;

export const MainProfile = styled.div`
  ${() => css`
    width: 100%;
    position: relative;
  `}
`;

export const ProfileHeader = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const Title = styled.h3`
    ${() => css`
    `}
`;

export const HideBtn = styled.button`
  ${() => css`
        height: 24px;
        border: none;
        font-weight: bold;
        color: #4945ff;
        background-color:  transparent;
  `}
`;

export const BackgroundImage = styled.img`
  ${() => css`
    width: 100%;
  `}
`;

export const MainDetail = styled.div`
  ${() => css`
    position: absolute;
    top: 15%;
    left: 5%;
    display: flex;
  `}
`;

export const Avatar = styled.img``;

export const ID = styled.span`
  ${() => css`
    color: #a5a5ba;
  `}
`;

export const Name = styled.span`
  ${() => css`
    font-weight: bold;
  `}
`;

export const MainDetailAndBtn = styled.div`
  ${() => css`
    max-width: 100%;
  `}
`;

export const NameAndID = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-left: 5px;
    font-size: 14px;
  `}
`;

export const Button = styled.button`
  ${() => css`
    height: 36px;
    position: absolute;
    right: 0;
    margin-top: 5px;
    padding: 5px;
    background-color: #fff;
    border: 1px #4945ff solid;
    color: #4945ff;
    font-weight: bold;
    border-radius: 8px;
  `}
`;

export const HireButton = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    margin-top: 20px;
  `}
`;

export const ContentHireBtn = styled.button`
  ${() => css`
    background-color: #4945ff;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    padding: 15px;
    font-weight: bold;
  `}
`;

export const DetailProfile = styled.div`
  ${() => css`
    margin: 60px 10px 0;
  `}
`;

export const SubDetailProfile = styled.div`
  ${() => css`
    height: 40px;
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
  `}
`;

export const Label = styled.p``;

export const Detail = styled.p`
  ${() => css`
    color: #666687;
  `}
`;

export const Hr = styled.div`
  border: 0.1px rgba(220, 220, 228, 0.5) solid;
  height: 0px;
`;
