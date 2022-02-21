import styled, { css } from "styled-components";

export const TabBarContainer = styled.div<{
  width?: number;
  height?: number;
  direction?: 'row' | 'column';
}>`
  ${({width, direction, height}) => css`
    width: ${width}px;
    height: ${height}px;
    display: flex;
    flex-direction: ${direction};
    border: none;
    border-radius: 8px;
    justify-content: space-around;
    align-items: center;
    font-family: 'Inter';
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
  `}
`;

export const GroupIcon = styled.button`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: white;
    margin: 10px 0;
  `}
`;

export const Icon = styled.img`
  ${() => css`
    width: 20px;
    height: 20px;
  `}
`;

export const TextIcon = styled.p<{
    isActive?:  "home" | "activity" | "inbox" | "profile";
}>`
  ${({isActive}) => css`
    margin: 6px 0 0 0;
    padding: 0;
    ${isActive && isActive === "home" &&
    css`
        color: #4945ff;
    `
    }

    ${isActive && isActive === "activity" &&
    css`
        color: #4945ff;
    `
    }

    ${isActive && isActive === "inbox" &&
    css`
        color: #4945ff;
    `
    }

    ${isActive && isActive === "profile" &&
    css`
        color: #4945ff;
    `
    }
  `}
`;
