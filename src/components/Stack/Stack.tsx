import React from 'react'

interface IStackProps {
    children: any,
    spacing: number,
    direction: 'row' | 'column',
    wrap: boolean,
    numberOfChildren?: number,
}

const Stack = ({
    children,
    spacing,
    direction = 'row',
    wrap = false,
}: IStackProps) => {
    return (
        <div style = {{
            display: 'flex',
            gap: `${spacing * 0.25}rem`,
            flexWrap: wrap ? 'wrap' : 'nowrap',
            flexDirection: direction
        }}> 
            {children}
        </div>
    )
}

export default Stack