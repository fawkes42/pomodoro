import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps {
    variant: ButtonVariant;
}

export const ButtonStyle = styled.button<ButtonProps>`
    width: 6.25rem;
    height: 2.5rem;
    margin: ${(props) => props.theme.space[2]};
    padding: ${(props) => props.theme.space[2]};

    background-color: ${(props) => props.theme.colors["green-500"]};
    color: ${(props) => props.theme.colors["gray-100"]};

    border: 0;
    border-radius: 8px;

    &:hover {
        cursor: pointer;
        filter: brightness(0.8);
    }
`;