import styled from "styled-components";

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

    @media (max-width: 768px) {
        font-size: 5rem;
        line-height: 5rem;
    }

    @media (max-width: 576px) {
        font-size: 4rem;
        line-height: 3rem;
    }

    @media (max-width: 400px) {
        font-size: 2rem;
        line-height: 1rem;
    }

    @media (max-width: 300px) {
        font-size: 1rem;
        line-height: 0.1rem;
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