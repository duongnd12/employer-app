import styled, {css} from 'styled-components';

export const DetailBox = styled.div`
    ${() => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 10px;
    `}
`

export const DetailLabel = styled.p`
    ${() => css`
        color: #666687;
        margin: 0;
        padding: 5px 0;
    `}
`

export const DetailValue = styled.p`
    ${() => css`
        font-weight: 600;
        padding: 5px 0;
        margin: 0;
    `}
`