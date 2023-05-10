import { ShoppingCart } from "phosphor-react";
import imgAmericano from "../../assets/americano.png";
import { CoffeeButton, CoffeeCardContainer, CoffeeCounter, CoffeeFooter, CoffeeType } from "./styles";

interface CoffeeTypes {
    type: string;
    iced: boolean;
    hasMilk: boolean;
    hasAlcool: boolean;
}
interface CoffeesList {
    id: Int16Array;
    name: string;
    image?: string;
    props: CoffeeTypes;
    description: string;
    price: DoubleRange;
}

export function CoffeeCard({name, description}) {
    return (
        <CoffeeCardContainer>
            <img src={imgAmericano} alt="" />
            <CoffeeType>
                TRADICIONAL
            </CoffeeType>
            <strong>{name}</strong>                       
            <p>{description}</p>
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