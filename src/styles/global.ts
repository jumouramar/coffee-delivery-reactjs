import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --white-100: #FFFFFF;
        --white-200: #FAFAFA;

        --gray-100: #F3F2F2;
        --gray-200: #EDEDED;
        --gray-300: #E6E5E5;
        --gray-400: #D7D5D5;
        --gray-500: #8D8686;
        --gray-600: #574F4D;
        --gray-700: #403937;
        --gray-800: #272221;

        --purple-light: #EBE5F9;
        --purple: #8047F8;
        --purple-dark: #4B2995;

        --yellow-light: #F1E9C9;
        --yellow: #DBAC2C;
        --yellow-dark: #C47F17;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: var(--white-200);   
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px;
    }

    body {
        color: var(--gray-600);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`;