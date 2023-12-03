import styled, { createGlobalStyle } from "styled-components";

export const Body = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Inter;
        
        --text-color: #222222;
        --yellow: #e6c320;
        --content-width: 780px;
    }

    * {
        box-sizing: border-box;
    }

    a { 
        color: #d80032
    }

`;

export const Main = styled.main``;
