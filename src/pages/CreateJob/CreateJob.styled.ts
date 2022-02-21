import styled, { css } from "styled-components";

export const CreateJobContainer = styled.div``;

export const CreateJobContent = styled.div`
  ${() => css`
    margin: 0px 10px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `}
`;

export const Heading = styled.h3`
  ${() => css`
    margin: 20px 0 20px 10px;
  `}
`;

export const ButtonContainer = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  `}
`;

export const SelectOption = styled.div``;

export const Label = styled.div`
  ${() => css`
    margin-bottom: 5px;
    font-size: 14px;
    font-family: sans-serif;
  `}
`;
