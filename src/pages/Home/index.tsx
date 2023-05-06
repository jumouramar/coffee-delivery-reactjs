import imgCoffee from "../../assets/imagem.png";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { CoffeeListContainer, HomeContainer, IntroContainer, Item, ItemsContainer, TitleContainer } from "./styles";
import { CoffeeCard } from "../../components/CoffeeCard";

export function Home() {
    return (
        <HomeContainer>
            <IntroContainer>
                <div>
                    <TitleContainer>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <h3>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h3>
                    </TitleContainer>
                    <ItemsContainer>
                        <Item>
                            <ShoppingCart size={16} weight="fill" />
                            <p>Compra simples e segura</p>
                        </Item>
                        <Item>
                            <Package size={16} weight="fill" />
                            <p>Embalagem mantém o café intacto</p>
                        </Item>
                        <Item>
                            <Timer size={16} weight="fill" />
                            <p>Entrega rápida e rastreada</p>
                        </Item>
                        <Item>
                            <Coffee size={16} weight="fill" />
                            <p>O café chega fresquinho até você</p>
                        </Item>
                    </ItemsContainer>
                </div>
                <img src={imgCoffee} alt="" />
            </IntroContainer>

            <h2>Nossos Cafés</h2>
            <CoffeeListContainer>
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
            </CoffeeListContainer>
        </HomeContainer> 
    );
}