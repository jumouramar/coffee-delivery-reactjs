import { NavLink } from "react-router-dom";
import logoCoffee from "../../assets/Logo.png";
import { HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
    return(
        <HeaderContainer>
            <NavLink to="/" title="home">
                    <img src={logoCoffee} alt="" />
            </NavLink>
            <nav>
                <div>
                    <MapPin size={22} weight="fill" />
                    <p>Porto Alegre, RS</p> 
                </div>
                <NavLink to="/checkout" title="Checkout">
                    <ShoppingCart size={22} weight="fill" />
                </NavLink>
            </nav>
        </HeaderContainer>
    );
}