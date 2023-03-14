import { HeaderContainer } from "./styles";
import Logo from "../../assets/tomato.svg";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";
export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} alt="Logo" />
            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24} />
                </NavLink>
                <NavLink to="/history" title="History">
                    <Scroll size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}