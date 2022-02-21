import styled, {css} from 'styled-components'

export const RowBookingContainer = styled.div<{
    width?: number;
}>`
    ${({width}) => css`
        width: ${width}px;
    `}
`
export const RowBox = styled.div<{
    bg?: 'bg1' | 'bg2';
}>`
    ${({bg}) => css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        ${bg === 'bg1' && css`
            background-color: #EFEFF2;
        `}

        ${bg === 'bg2' && css`
            background-color: #F6F6F9;
        `}
    `}
`

export const RowBooking = styled.div`
    ${() => css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        padding: 0 5px;
    `}
`

export const Label = styled.h4``

export const Value = styled.div``

export const StatusTag = styled.div<{
    type?: 'close' | 'pending' | 'running' | 'progress';
}>`
    ${({type}) => css`
    padding: 5px 10px;
    border-radius: 4px;
    ${type === 'close' && css`
        color: #EF4444;
        background-color: #FEE2E2;
    `}
    ${type === 'pending' && css`
        color: #F59E0B;
        background-color: #FEF3C7;
    `}
    ${type === 'running' && css`
        color: #423FFF;
        background-color: #F0F0FF;
    `}
    ${type === 'progress' && css`
        color: #10B981;
        background-color: #D1FAE5;
    `}
`}
`

export const StatusTime = styled.p``

export const LastUpdateDateAndTime = styled.div`
    ${() => css`
        display: flex;
        margin: 0;
        gap: 10px;
        align-items: center;
    `}
`

export const LastUpdateDate = styled.p`
     ${() => css`
        margin: 0;
        text-align: right;
    `}
`

export const LastUpdateTime = styled.p`
     ${() => css`
        margin: 0;
        text-align: right;
    `}
`

export const LastUpdateDayAmount = styled.p`
    ${() => css`
        margin: 0;
        text-align: right;
        margin-top: 5px;
    `}
`

export const ActionIcon = styled.div`
    ${() => css`
        display: flex;
        align-items: center;
        gap: 10px;
    `}
`

export const Icon = styled.img``