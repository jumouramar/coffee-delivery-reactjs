import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { CheckoutAdressAndPayment, CheckoutContainer, CheckoutOrder, CheckoutSelected, CheckoutSelectedContainer, PaymentButton } from "./style";
import { NavLink } from "react-router-dom";

export function Checkout() {
    return (
        <CheckoutContainer>
            <CheckoutOrder>
                <h4>Complete seu pedido</h4>
                <CheckoutAdressAndPayment>
                    <header>
                        <div>
                            <MapPinLine size={22} />
                        </div>
                        <div>
                            <strong>Endereço de Entrega</strong>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </header>
                    <form action="">
                        <input type="text" value="CEP" />
                        <input type="text" value="Rua" />
                        <input type="text" value="Número" />
                        <input type="text" value="Complemento" />
                        <input type="text" value="Bairro" />
                        <input type="text" value="Cidade" />
                        <input type="text" value="UF" />
                    </form>
                </CheckoutAdressAndPayment>
                <CheckoutAdressAndPayment>
                    <header>
                        <div>
                            <CurrencyDollar size={22} />
                        </div>
                        <div>
                            <strong>Pagamento</strong>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </header>
                    <div>
                        <PaymentButton>
                            <CreditCard size={16} />
                            <p>CARTÃO DE CRÉDITO</p>
                        </PaymentButton>
                        <PaymentButton>
                            <Bank size={16} />
                            <p>CARTÃO DE DÉBITO</p>
                        </PaymentButton>
                        <PaymentButton>
                            <Money size={16} />
                            <p>DINHEIRO</p>
                        </PaymentButton>
                    </div>
                </CheckoutAdressAndPayment>
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
                    <NavLink to="/success" >
                         <button>
                            CONFIRMAR PEDIDO
                        </button>
                    </NavLink>
                </CheckoutSelected>
            </CheckoutSelectedContainer>
        </CheckoutContainer>
    );
}