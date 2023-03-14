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

const BaseInput = styled.input`
    background: transparent;
    
    border: 0;
    border-bottom: 2px solid ${props => props.theme.colors["gray-700"]};
    
    color: ${props => props.theme.colors["gray-100"]};
    font-size: inherit; // 1.125rem
    font-weight: bold;
    
    padding: 0 0.5rem;
    height: 2.5rem;

    transition: all 0.2s;

    &:focus {
        border-bottom-color: ${props => props.theme.colors.primary};
    }
`

export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`;

export const TaskTimeInput = styled(BaseInput)`
    width: 4rem;
`;

export const Separator = styled.div`
    padding: 2rem 0;
    color: ${props => props.theme.colors.primary};

    width: 4rem;
    overflow: hidden;

    display: flex;
    justify-content: center;
`;

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

