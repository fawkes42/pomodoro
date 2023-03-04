import { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./Button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    text: string;
}

export function Button({
    variant = "primary",
    text,
    ...props
}: ButtonProps) {
    return (
        <ButtonStyle
            variant={variant}
            {...props}
        >
            {text}
        </ButtonStyle>
    )
}