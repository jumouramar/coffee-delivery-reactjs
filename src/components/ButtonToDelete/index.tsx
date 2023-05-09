import { Trash } from "phosphor-react";
import { ButtonDelete } from "./styles";

export function ButtonToDelete() {
    return (
        <ButtonDelete>
            <Trash size={16} />
            <p>REMOVER</p> 
        </ButtonDelete>
    )
};