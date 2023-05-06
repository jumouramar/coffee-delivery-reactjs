import { ShoppingCart } from "phosphor-react";
import imgAmericano from "../../assets/americano.png";
import { CoffeeButton, CoffeeCardContainer, CoffeeCounter, CoffeeFooter, CoffeeType } from "./styles";

export function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <img src={imgAmericano} alt="" />
            <CoffeeType>
                TRADICIONAL
            </CoffeeType>
            <strong>Expresso Tradicional</strong>                       
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <CoffeeFooter>
                <div>
                    <p>R$</p> 
                    <strong>9,90</strong>
                </div>
                <div>
                    <CoffeeCounter>
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                    </CoffeeCounter>
                    <CoffeeButton>
                        <ShoppingCart size={22} weight="fill" />
                    </CoffeeButton>
                </div>
            </CoffeeFooter>
        </CoffeeCardContainer>
    );        
}