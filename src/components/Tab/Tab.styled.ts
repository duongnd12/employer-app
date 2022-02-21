import React from "react";
import { TabPaneProps, TabsProps } from "antd/lib/tabs";
import { Tabs } from "antd";
import styled, { css } from "styled-components";

const { TabPane } = Tabs;

export const SearchAndFilter = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  `}
`;

export const NewTabs: React.FunctionComponent<TabsProps> = styled(Tabs)`
  ${() => css`
    .ant-tabs-nav-list {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
  `}
`;

export const NewTabPane: React.FunctionComponent<TabPaneProps> = styled(TabPane)`
  ${() => css`
    gap: 10px;
  `}
`
export const Cards = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0;
  `}
`