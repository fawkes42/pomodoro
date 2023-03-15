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

    @media (max-width: 900px) {
        max-width: 70rem;
    }
`

export const BaseCountdownButton = styled.button`
    width: 100%;
    border: 0;
    border-radius: 8px;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-weight: bold;

    cursor: pointer;

    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors["gray-100"]};

    transition: filter 0.2s;

    &:enabled:hover {
        filter: brightness(0.9);
    }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors["gray-100"]};
`;
export const StopCountdownButton = styled(BaseCountdownButton)`
    background: ${props => props.theme.colors["red-500"]};
    color: ${props => props.theme.colors["gray-100"]};
`;

