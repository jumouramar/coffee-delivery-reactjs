import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

export function Checkout() {
    return (
        <>
            <div>
                <h4>Complete seu pedido</h4>
                <div>
                    <div>
                        <div>
                            <MapPinLine size={32} />
                        </div>
                        <div>
                            <strong>Endereço de Entrega</strong>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </div>
                    <div>
                        form
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <CurrencyDollar size={32} />
                        </div>
                        <div>
                            <strong>Pagamento</strong>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </div>
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
                </div>
            </div>
            <div>
                <h4>Cafés Selecionados</h4>
                <div>
                    <div>Cafés</div>
                    <div>
                        <div>
                            <div>
                                <p>Expresso Tradicional</p>
                                <strong>R$ 9,90</strong>
                            </div>
                            <div>
                                <button>
                                    REMOVER
                                </button>
                            </div>
                        </div>
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
                    
                </div>
            </div>
        </>
    );
}