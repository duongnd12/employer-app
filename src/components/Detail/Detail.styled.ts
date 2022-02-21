import styled, {css} from 'styled-components'

export const DetailContainer = styled.div`
    ${() => css`
        width: 100%;
        background-color: #fff;
    `}
`

export const Header = styled.div`
    ${() => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `}
`

export const HideBtn = styled.button`
  ${() => css`
        height: 24px;
        border: none;
        font-weight: bold;
        color: #4945ff;
        background-color:  transparent;
  `}
`;

export const BtnDetail = styled.div`
    ${() => css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    `}
`