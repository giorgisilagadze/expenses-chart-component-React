import styled from "styled-components";

export const SpenDiv = styled.div`
    width: 343px;
    margin: 16px auto 0px;
    background-color: #FFFBF6;
    padding: 24px 20px;
    border-radius: 10px;
    
`

export const SpenTxt = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 31.25px;
    color: #382314;
`

export const DaysTable = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 152px;
`

export const Column = styled.div`
    width: 33px;
    height: 50px;
    box-sizing: content-box;
    border-radius: 3px;
    background-color: ${({bg}) => bg};
    margin-top: ${({mTop}) => mTop};
    padding-top: ${({pTop}) => pTop};
`

export const Spent = styled.div`
    width: 30px;
    height: 20px;
    background-color: red;
    z-index: 3;
`