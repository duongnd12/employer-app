import React from "react";

import styled, { css } from "styled-components";

export const ResumeContainer = styled.div`
  ${() => css`
    width: 100%;
    margin-bottom: 20px;
  `}
`;

export const ResumeCardContainer = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px 10px;
    margin: 20px 0;
  `}
`;

export const Heading = styled.h3`
  ${() => css`
    margin: 10px;
  `}
`;