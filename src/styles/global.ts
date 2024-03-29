import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors["gray-900"]};
        color: ${(props) => props.theme.colors["gray-300"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    :focus {
        outline: 0;
    }

    :disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }

    @media (max-width: 768px) {
        html {
            font-size: 70%;
        }
    }

`;