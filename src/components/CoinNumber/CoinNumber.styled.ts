import styled, {css} from 'styled-components';

export const CoinContainer = styled.div<{
    width?: number;
}>`
    ${({ width }) => css`
        width: ${width}px;
        font-family: 'Inter';
        border: 1px #DCDCE4 solid;
        border-radius: 8px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        background-color: #fff;
    `}
`

export const Coin = styled.h4`
    ${() => css`
        padding: 0;
        margin: 0;
    `}
`

export const Icon = styled.img`
    ${() => css`
    `}
`
