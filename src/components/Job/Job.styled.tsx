import styled, { css } from 'styled-components';

export const JobContainer = styled.div`
    border: 1px gray solid;
    width: 164px;
    padding: 10px;
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
;

`

export const LogoAndName = styled.div`
    ${() => css`
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    `}
`

export const Icon = styled.img`
    ${() => css`
        margin-right: 10px;
        color: #C0C0CF;
    `}
`

export const Name = styled.h4`
    ${() => css`
        margin: 0;
        color: #C0C0CF;
    `}
`

export const PositionAndAddress = styled.div`
    ${() => css`
        margin: 15px 0;
    `}
`

export const Position = styled.h3`
    ${() => css`
        margin: 0;
    `}
`

export const Address = styled.p`
     ${() => css`
        margin: 0;
        color: #C0C0CF;
    `}
`

export const Salary = styled.h4`
    ${() => css`
        margin: 0;
        color: #4945ff;
    `}
`