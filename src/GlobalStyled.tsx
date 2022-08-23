import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   *{
    margin: 0; padding: 0; border: 0; outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    }

    /* Variaveis */
    :root{
        --Cyan: hsl(180, 66%, 49%);
        --Dark-Violet: hsl(257, 27%, 26%);
        --Red: hsl(0, 87%, 67%);

        --Gray: hsl(0, 0%, 75%);
        --Grayish-Violet: hsl(257, 7%, 63%);
        --Very-Dark-Blue: hsl(255, 11%, 22%);
        --Very-Dark-Violet: hsl(260, 8%, 14%);
        --black: #000;
        --white: #FFF;
    }
`;
