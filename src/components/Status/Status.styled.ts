import styled, {css} from 'styled-components'

export const StatusContainer = styled.div`
    
    
`
export const Span = styled.span<{
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