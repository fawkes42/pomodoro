import styled from "styled-components";

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