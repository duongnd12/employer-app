import styled, {css} from 'styled-components'

export const AddCardContainer = styled.div<{
    width?:number;
}>`
    ${({ width }) => css`
        width: ${width}px;
        /* height: 300px; */
        background-color: #fff;
        font-family: 'Inter';
        border-radius: 5px;
        position: relative;
        cursor: pointer;
    `}
`

export const Heading = styled.h4`
    ${() => css`
        margin: 0;
        padding: 5px 0;
        font-size: 16px;
    `}
`

export const ResumeImage = styled.img<{
    width?:number;
}>`
    ${({ width }) => css`
        width: ${width}px;
    `}
`
export const ResumeIcon = styled.img` 
    ${() => css`
    `}
    `
export const IconContainer = styled.div`
    ${() => css`
        position: absolute;
        top: 40%;
        left: 45%;
    `}
`
