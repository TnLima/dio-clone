import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: 'DM Sans';
    transition: 0.2s;
}

body{
    background-color: #1e192c;
    color:white;
}

input{
    outline: none;
    text-indent: 8px;
}
`;