import { Position } from './../Job/Job.styled';
import styled, { css } from "styled-components";

export const NavigationContainer = styled.div`
  ${() => css`
    /* width: 30px; */
    display: flex;
    flex-direction: column;
    background-color: #fff;
    position: relative;
  `}
`;

export const Icon = styled.img`
  ${() => css`
    width: 30px;
    height: 30px;
    cursor: pointer;
  `}
`;

export const NavList = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 20px;
    background-color: #fff;
    z-index: 99;
    width: 50px;
    margin-top: 20px;
    padding: 0 20px 20px;
    right: 0
  `}
`;
