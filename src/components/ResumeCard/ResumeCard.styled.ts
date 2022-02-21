import styled, {css} from 'styled-components'

export const ResumeCardContainer = styled.div<{
    width?:number;
}>`
    ${({ width }) => css`
        width: ${width}px;
        /* height: 300px; */
        background-color: #fff;
        position: relative;
        font-family: 'Inter';
        border-radius: 5px;
        box-sizing: border-box;
    `}
`

export const Heading = styled.h4`
    ${() => css`
        margin: 0;
        padding: 5px 0;
        font-size: 14px;
    `}
`

export const LastUpdate = styled.p`
    ${() => css`
        margin: 0;
        padding: 0;
        font-size: 12px;
        color: #A5A5BA;
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
        background-color: #6666877a;
        border-radius: 50%;
        /* opacity: 0.5; */
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 10px;
        right: 10px;
    `}
`