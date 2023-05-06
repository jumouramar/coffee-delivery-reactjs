import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CheckoutAdress, CheckoutContainer, CheckoutOrder, CheckoutPaymentMethod, CheckoutSelected, CheckoutSelectedContainer } from "./style";
import { CheckoutItem } from "../../components/CheckoutItem";

export function Checkout() {
    return (
        <CheckoutContainer>
            <CheckoutOrder>
                <h4>Complete seu pedido</h4>
                <CheckoutAdress>
                    <header>
                        <div>
                            <MapPinLine size={32} />
                        </div>
                        <div>
                            <strong>Endereço de Entrega</strong>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </header>
                    <form action="">Form aqui</form>
                </CheckoutAdress>
                <CheckoutPaymentMethod>
                    <header>
                        <div>
                            <CurrencyDollar size={32} />
                        </div>
                        <div>
                            <strong>Pagamento</strong>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </header>
                    <div>
                        <button>
                            <CreditCard size={32} />
                            <p>CARTÃO DE CRÉDITO</p>
                        </button>
                        <button>
                            <Bank size={32} />
                            <p>CARTÃO DE DÉBITO</p>
                        </button>
                        <button>
                            <Money size={32} />
                            <p>DINHEIRO</p>
                        </button>
                    </div>
                </CheckoutPaymentMethod>
            </CheckoutOrder>
            <CheckoutSelectedContainer>
                <h4>Cafés Selecionados</h4>
                <CheckoutSelected>
                    <div>
                        <div>
                            <p>Total de Itens</p>
                            <p>Entrega</p>
                            <strong>Total</strong>
                        </div>
                        <div>
                            <p>R$ 29,70</p>
                            <p>R$ 3,50</p>
                            <strong>R$ 33,20</strong>
                        </div>
                    </div>
                    <button>
                        CONFIRMAR PEDIDO
                    </button>
                </CheckoutSelected>
            </CheckoutSelectedContainer>
        </CheckoutContainer>
    );
}