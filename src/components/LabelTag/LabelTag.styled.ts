import styled, {css} from 'styled-components';

export const LabelTagContainer = styled.span<{
    width?: number;
}>`
    ${({ width }) => css`
        width: ${width}px;
        background-color: #F6F6F9;
        color: #A5A5BA;
        padding: 10px;
        border-radius: 4px;
    `}
`