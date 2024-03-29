import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px;
    }

    body {
        color: ${props => props.theme['gray-600']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`;