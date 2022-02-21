import React from 'react'

import { StatusContainer, Span } from './Status.styled'


interface IStatusProps {
    status?: string,
    isClose?: boolean,
    isPending?: boolean,
    isRunning?: boolean,
    isProgress?: boolean,
}

const Status = ({
    status,
    isClose,
    isPending,
    isProgress,
    isRunning,
}: IStatusProps) => {
    let type : 'close' | 'pending' | 'running' | 'progress' = 'close';
    if(isClose) type = 'close';
    if(isPending) type = 'pending';
    if(isProgress) type = 'progress';
    if(isRunning) type = 'running';
    return (
        <StatusContainer>
            <Span type={type}>{status}</Span>
        </StatusContainer>
    )
}

export default Status