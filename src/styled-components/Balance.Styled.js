import styled from "styled-components";

export const MainDiv = styled.div`
    width: 343px;
    margin: auto;
    background-color: #EC755D;
    border-radius: 10px;
    padding: 20px 24px 22px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(min-width: 1440px) {
        width: 540px;
        border-radius: 10px;
        padding: 27px 38px 25px 32px;
    }
`

export const BalText = styled.p`
    font-weight: 400;
    font-size: 15px;
    line-height: 19.53px;
    color: white;

    @media(min-width: 1440px) {
        font-size: 18px;
        line-height: 23.44px;
    }
`

export const Money = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 31.25px;
    color: white;
    margin-top: 4px;

    @media(min-width: 1440px) {
        font-size: 32px;
        line-height: 41.66px;
    }
`