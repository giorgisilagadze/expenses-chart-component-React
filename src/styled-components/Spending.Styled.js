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
    margin-top: ${({mTop}) => mTop};
`

export const DaysOfWeek = styled.div`
    display: flex;
    margin-top: 8px;
    gap: 12px;
`

export const Days = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 15.62px;
    text-align: center;
    color: #92857A;
    width: 33px;
`

export const Hr = styled.hr`
    width: 100%;
    height: 2px;
    border: none;
    background-color: #F8E9DD;
    margin-top: 24px;
`

export const Total = styled(DaysOfWeek)`
    margin-top: 24px;
    justify-content: space-between;
`

export const ThisMonth = styled.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 19.53px;
    color: #92857A;
`

export const SpentMonth = styled(SpenTxt)`
    font-size: 30px;
    line-height: 39.06px;
    margin-top: 4px;
`

export const Percent = styled(SpentMonth)`
    font-size: 15px;
    line-height: 19.53px;
    margin-top: 23px;
    text-align: right;
`