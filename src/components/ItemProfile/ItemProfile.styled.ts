import styled, {css} from 'styled-components';

export const ItemProfileContainer = styled.div`
    ${() => css`
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: #fff;
    `}
`

export const Title = styled.h4`
    ${() => css`
        margin: 10px 0;
    `}
`

export const BtnAdd = styled.div`
    ${() => css`
        display: flex;
        justify-content: flex-end;
    `}
`