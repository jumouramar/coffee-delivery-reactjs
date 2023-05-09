import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import imageSuccess from "../../assets/illustration.png"
import { OrderInfo, SuccessContainer, SuccessInfoAndImage, SuccessTitle } from "./styles";

export function Success() {
    return (
        <SuccessContainer>
            <SuccessTitle>
                <strong>Uhu! Pedido confirmado</strong>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </SuccessTitle>
            <SuccessInfoAndImage>
                <OrderInfo>
                    <div>
                        <MapPin size={16} weight="fill" />
                        <div>
                            <p>
                                Entrega em
                                <strong> Rua João Daniel Martinelli, 102</strong>
                            </p>
                            <p>Farrapos - Porto Alegre, RS</p>
                        </div>
                    </div>
                    <div>
                        <Timer size={16} weight="fill" />
                        <div>
                            <p>Previsão de entrega</p>
                            <strong>20 min - 30 min</strong>
                        </div>
                    </div>
                    <div>
                        <CurrencyDollar size={16} weight="bold" />
                        <div>
                            <p>Pagamento na entrega</p>
                            <strong>Cartão de Crédito</strong>
                        </div>
                    </div>
                </OrderInfo>
                <img src={imageSuccess} alt="" />
            </SuccessInfoAndImage>
        </SuccessContainer>
    );
}