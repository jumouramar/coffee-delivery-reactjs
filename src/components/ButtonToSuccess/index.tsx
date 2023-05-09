import { NavLink } from "react-router-dom";
import { ButtonSuccess } from "./styles";

export function ButtonToSuccess() {
    return (
        <NavLink to="/success" >
                <ButtonSuccess>
                    CONFIRMAR PEDIDO
                </ButtonSuccess>
        </NavLink>
    )
};