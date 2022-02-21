import styled, { css } from 'styled-components'

export const LevelContainer = styled.div`
    ${() => css`
        display: flex;
        flex-wrap: wrap;
    `}
`

export const LevelButton = styled.button<{
    isLevel1?: boolean;
    isLevel2?: boolean;
    isLevel3?: boolean;
    isLevel4?: boolean;
    isLevel5?: boolean;
    isLevel6?: boolean;
}>`
    ${({
        isLevel1,
        isLevel2,
        isLevel3,
        isLevel4,
        isLevel5,
        isLevel6,
        }) => css`
        padding: 8px;
        margin: 5px;
        border: none;
        border-radius: 4px;
        ${isLevel1 && css`
            color: #4945ff;
            background-color: #fff;
            border: 1px #4945ff solid;
        `}
        ${isLevel2 && css`
            color: #4945ff;
            background-color: #fff;
            border: 1px #4945ff solid;
        `}
        ${isLevel3 && css`
            color: #4945ff;
            background-color: #fff;
            border: 1px #4945ff solid;
        `}
        ${isLevel4 && css`
            color: #4945ff;
            background-color: #fff;
            border: 1px #4945ff solid;
        `}
        ${isLevel5 && css`
            color: #4945ff;
            background-color: #fff;
            border: 1px #4945ff solid;
        `}
        ${isLevel6 && css`
            color: #4945ff;
            background-color: #fff;
            border: 1px #4945ff solid;
        `}
    `}
`