import styled, { css } from "styled-components";

export const MicroCardContainer = styled.div<{
  width?:number;
}>`
  ${({ width }) => css`
    width: ${width}px;
    display: flex;
    border: none;
    border-radius: 8px;
    height: 132px;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    position: relative;
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  `}
`;

export const FrameDetail = styled.div`
  ${() => css`
    width: 100%;
    margin: 0 10px;
  `}
`;

export const Image = styled.img`
  width: 30%;
`;

export const Heading = styled.h4`
  ${() => css`
    margin: 10px 0;
  `}
`;

export const Name = styled.h5`
  ${() => css`
    margin: 0;
  `}
`;

export const Role = styled.h5`
  ${() => css`
    margin: 0;
    color: #A5A5BA;
  `}
`;

export const Price = styled.h4`
  ${() => css`
    display: flex;
    align-items: center;
    color:  #1E88E5;
  `}
`;

export const Avatar = styled.img`
  ${() => css`
    max-width: 32px;
    margin-right: 10px;
  `}
`;

export const GroupDetailMember = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
  `}
`;

export const MemberPrice = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    width: 225px;
    height: 40px;
  `}
`;

export const Date = styled.p`
    ${() => css`
        flex: 1;
        margin: 0;
        font-size: 12px;
        color:#666687;
        display: flex;
        align-items: center;
    `}
`;

export const DetailButton = styled.button<{
    status?: "order" | "buy" | "bid";
}>`
    ${( {status}) => css`
        flex: 1;
        height: 24px;
        position: absolute;
        right: 0;
        background-color: #fff;
        ${status && status === 'buy' && 
        css`
            color: #423FFF;
            border: 0.5px #423FFF solid;
            border-radius: 4px;
        `}

        ${status && status === 'bid' && 
        css`
            color:#666687;
            border: none;
        `}
    `}
`;

export const StatusButton = styled.button`
    ${() => css`
        height: 36px;
        position: absolute;
        bottom: 5px;
        right: 5px;
        background-color: #1E88E5;
        color: #fff;
        border: none;
        border-radius: 8px;
        padding: 0 10px;
    `}
`;

export const SubFrame = styled.div`
    ${( ) => css`
        display: flex;
        width: 131px;
        height: 24px;
        margin-top: 24px;
        position: relative;
    `}
`