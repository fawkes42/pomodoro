import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3.5rem;
    }
`

export const FormContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;

    color: ${props => props.theme.colors["gray-100"]};
    font-size: 1.125rem;
    font-weight: bold;

`;

export const CountDownContainer = styled.section`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${props => props.theme.colors["gray-100"]};

    display: flex;
    gap: 1rem;

    span {
        background: ${props => props.theme.colors["gray-700"]};
        padding: 2rem 1rem;
        border-radius: 8px;
    }
`;

export const Separator = styled.div`
    padding: 2rem 0;
    color: ${props => props.theme.colors.primary};

    width: 4rem;
    overflow: hidden;

    display: flex;
    justify-content: center;
`;

