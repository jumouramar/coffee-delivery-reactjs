import imgCoffee from "../../assets/imagem.png";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { CoffeeListContainer, HomeContainer, IntroContainer, Item, ItemsContainer, TitleContainer } from "./styles";
import { CoffeeCard } from "../../components/CoffeeCard";

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

const CoffeesList = [
    {
      id: 1,
      name: 'Expresso Tradicional',
      image: 'imgCoffee',
      props: {
        type:'tradicional',
        iced: false,
        hasMilk: false,
        hasAlcool: false,
      },
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.90,
    },
    {
      id: 2,
      name: 'Expresso Americano',
      props: {
        type:'tradicional',
        iced: false,
        hasMilk: false,
        hasAlcool: false,
      },
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.90,
    },
    {
      id: 3,
      name: 'Expresso Cremoso',
      props: {
        type:'tradicional',
        iced: false,
        hasMilk: false,
        hasAlcool: false,
      },
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.90,
    },
    {
      id: 4,
      name: 'Expresso Americano',
      props: {
        type:'tradicional',
        iced: false,
        hasMilk: false,
        hasAlcool: false,
      },
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.90,
    },
    {
      id: 5,
      name: 'Café com Leite',
      props: {
        type:'tradicional',
        iced: false,
        hasMilk: true,
        hasAlcool: false,
      },
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.90,
    },
    {
      id: 6,
      name: 'Latte',
      props: {
        type:'tradicional',
        iced: false,
        hasMilk: true,
        hasAlcool: false,
      },
      description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.90,
    },
    {
      id: 7,
      name: 'Capuccino',
      props: {
        type:'tradicional',
        iced: false,
        hasMilk: true,
        hasAlcool: false,
      },
      description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.90,
    },
    {
      id: 8,
      name: 'Macchiato',
      props: {
        type:'tradicional',
        iced: false,
        hasMilk: true,
        hasAlcool: false,
      },
      description: 'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.90,
    },
    {
      id: 9,
      name: 'Mocaccino',
      props: {
        type:'tradicional',
        iced: false,
        hasMilk: true,
        hasAlcool: false,
      },
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.90,
    },
    {
      id: 10,
      name: 'Chocolate Quente',
      props: {
        type:'especial',
        iced: false,
        hasMilk: true,
        hasAlcool: false,
      },
      description: 'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.90,
    },
    {
      id: 11,
      name: 'Cubano',
      props: {
        type:'especial',
        iced: true,
        hasMilk: false,
        hasAlcool: true,
      },
      description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.90,
    },
    {
      id: 12,
      name: 'Havaiano',
      props: {
        type:'especial',
        iced: false,
        hasMilk: false,
        hasAlcool: false,
      },
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.90,
    },
    {
      id: 13,
      name: 'Árabe',
      props: {
        type:'especial',
        iced: false,
        hasMilk: false,
        hasAlcool: false,
      },
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.90,
    },
    {
      id: 14,
      name: 'Irlandês',
      props: {
        type:'tradicional',
        iced: false,
        hasMilk: false,
        hasAlcool: true,
      },
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.90,
    },
  ];

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
                        <Item backgroundColor="orange">
                              <ShoppingCart size={16} weight="fill" />
                            <p>Compra simples e segura</p>
                        </Item>
                        <Item backgroundColor="gray">
                            <Package size={16} weight="fill" />
                            <p>Embalagem mantém o café intacto</p>
                        </Item>
                        <Item backgroundColor="yellow">
                            <Timer size={16} weight="fill" />
                            <p>Entrega rápida e rastreada</p>
                        </Item>
                        <Item backgroundColor="purple">
                            <Coffee size={16} weight="fill" />
                            <p>O café chega fresquinho até você</p>
                        </Item>
                    </ItemsContainer>
                </div>
                <img src={imgCoffee} alt="" />
            </IntroContainer>

            <h2>Nossos Cafés</h2>
            <CoffeeListContainer>
                {CoffeesList.map(coffee => {
                    return <CoffeeCard 
                        name={coffee.name}
                        description={coffee.description}
                        />
                    })
                }
            </CoffeeListContainer>
        </HomeContainer> 
    );
}