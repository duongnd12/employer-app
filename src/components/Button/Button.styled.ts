import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button<{
    typeButton?: 'primary' | 'secondary';
    size?: 'default' | 'small';
    width?: number;
}>` 
${({ size, typeButton, width }) => css`
    width: ${width}px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Inter";
    color: blue;
    border-radius: 8px;
    ${typeButton === 'primary' && css`
        border: none;
        color: #fff;
        background-color: #4945FF;
    `}
    ${typeButton === 'secondary' && css`
        border: 1px #4945FF solid;
        background-color: #fff;
        color: #4945FF;
    `}
    ${size === 'default' &&
    css`
        height: 48px;
    `}
    ${size === 'small' &&
    css`
        height: 36px;
    `}
    
`}
`

export const Icon = styled.img`
    ${() => css`
    `}
`

export const Text = styled.p`
    margin: 0 10px;
`