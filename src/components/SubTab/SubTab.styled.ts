import React from 'react'
import styled, {css} from 'styled-components';

import { TabsProps } from 'antd/lib/tabs';
import {Tabs} from 'antd';


export const NewTabs: React.FC<TabsProps> = styled(Tabs)`
    ${() => css`
        width: 100%;
        .ant-tabs-nav-list {
            width: 100%;
        }
        .ant-tabs-tab {
            flex: 1;
            color: #A5A5BA;
            font-weight: 600;
        }
    `}
`