import React from 'react'
import styled, { css } from 'styled-components'

import { Button } from 'antd'
import {ButtonProps} from 'antd/lib/button'

export const HomeContainer = styled.div`
    ${() => css`
        box-sizing: border-box;
        margin: 20px 10px 10px;
        padding: 0;
    `}
`

export const Navigation = styled.div`
    ${() => css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 10px;
    `}
`
export const NewButton: React.FC<ButtonProps> = styled(Button)`
    border: none;
    box-shadow: none;
`
