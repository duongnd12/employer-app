import styled, { css } from 'styled-components'

export const TagContainer = styled.div`
    ${() => css`
        display: flex;
        flex-wrap: wrap;
    `}
`

export const TagButton = styled.button<{
    isTag1?: boolean;
    isTag2?: boolean;
    isTag3?: boolean;
    isTag4?: boolean;
    isTag5?: boolean;
}>`
    ${({
        isTag1,
        isTag2,
        isTag3,
        isTag4,
        isTag5,
        }) => css`
        padding: 8px;
        margin: 5px;
        border: none;
        border-radius: 4px;
        ${isTag1 && css`
            color: #4945ff;
            background-color: #fff;
            border: 1px #4945ff solid;
        `}
        ${isTag2 && css`
            color: #4945ff;
            background-color: #fff;
            border: 1px #4945ff solid;
        `}
        ${isTag3 && css`
            color: #4945ff;
            background-color: #fff;
            border: 1px #4945ff solid;
        `}
        ${isTag4 && css`
            color: #4945ff;
            background-color: #fff;
            border: 1px #4945ff solid;
        `}
        ${isTag5 && css`
            color: #4945ff;
            background-color: #fff;
            border: 1px #4945ff solid;
        `}
    `}
`