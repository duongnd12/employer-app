import React from 'react';

import styled, {css} from 'styled-components'

import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button';

export const NewButton: React.FC<ButtonProps> = styled(Button)`
    ${() => css`
        border: none;
        background-color: #fff;
        color: #423FFF;
        font-size: 18px;
        margin: 0;
        padding: 0 5px;
        box-shadow: none;
    `}
`

export const FilterLevel = styled.div``

export const FilterTag = styled.div``

export const FilterPrice = styled.div``