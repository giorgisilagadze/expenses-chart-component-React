import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
    }

    body {
        height: 100vh;
        background-color: #f8e9dd;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`