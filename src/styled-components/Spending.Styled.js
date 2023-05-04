import styled from "styled-components";

export const SpenDiv = styled.div`
    width: 343px;
    margin: 16px auto 0px;
    background-color: #FFFBF6;
    padding: 24px 20px;
    border-radius: 10px;

    @media(min-width: 1440px) {
        width: 540px;
        margin: 24px auto 0px;
        padding: 32px 40px 41px;
        border-radius: 20px;
    }
    
`

export const SpenTxt = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 31.25px;
    color: #382314;

    @media(min-width: 1440px) {
        font-size: 32px;
        line-height: 41.66px;
    }
`

export const DaysTable = styled.div`
    display: flex;
    gap: 12px;
    margin-top: 152px;

    @media(min-width: 1440px) {
        gap: 17.91px;
        margin-top: 166px;
    }
`

export const Column = styled.div`
    width: 33px;
    height: 50px;
    box-sizing: content-box;
    border-radius: 3px;
    background-color: ${({bg}) => bg};
    margin-top: ${({mTop}) => mTop};
    padding-top: ${({pTop}) => pTop};

    @media(min-width: 1440px) {
        width: 50.36px;
        border-radius: 5px;
        position: relative;
        cursor: pointer;

        &:hover::before {
            content: "${({cont}) => cont}";
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.27%, rgba(0, 0, 0, 0.661222) 100%);
            position: absolute;
            top: -48px;
            left: -11px;
            width: 75px;
            height: 40px;
            background-color: #382314;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #FFFBF6;
            font-weight: 700;
            font-size: 18px;
            line-height: 23.44px;
        }

        &:hover {
            background-color: ${({bgDesk}) => bgDesk};
        }
    }
`

export const DaysOfWeek = styled.div`
    display: flex;
    margin-top: 8px;
    gap: 12px;

    @media(min-width: 1440px) {
        gap: 18px;
    }
`

export const Days = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 15.62px;
    text-align: center;
    color: #92857A;
    width: 33px;

    @media(min-width: 1440px) {
        font-size: 15px;
        line-height: 19.53px;
        width: 50px;
    }
`

export const Hr = styled.hr`
    width: 100%;
    height: 2px;
    border: none;
    background-color: #F8E9DD;
    border-radius: 1px;
    margin-top: 24px;

    @media(min-width: 1440px) {
        margin-top: 32px;
    }
`

export const Total = styled(DaysOfWeek)`
    margin-top: 24px;
    justify-content: space-between;

    @media(min-width: 1440px) {
        margin-top: 32px;
    }
`

export const ThisMonth = styled.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 19.53px;
    color: #92857A;

    @media(min-width: 1440px) {
        font-size: 18px;
        line-height: 23.44px;
    }
`

export const SpentMonth = styled(SpenTxt)`
    font-size: 30px;
    line-height: 39.06px;
    margin-top: 4px;

    @media(min-width: 1440px) {
        font-size: 48px;
        line-height: 62.5px;
        margin-top: 1px;
    }
`

export const Percent = styled(SpentMonth)`
    font-size: 15px;
    line-height: 19.53px;
    margin-top: 23px;
    text-align: right;

    @media(min-width: 1440px) {
        font-size: 18px;
        line-height: 23.44px;
        margin-top: 31px;
    }
`