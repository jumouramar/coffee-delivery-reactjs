import styled from "styled-components";

export const CheckoutContainer = styled.div`
    display: flex;
    gap: 2rem;

    h4 {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 130%;
    }
`;

export const CheckoutOrder = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CheckoutAdress = styled.div`
    background: ${(props) => props.theme['gray-100']};
    border-radius: 6px;
    padding: 2.5rem;
    
    header {
        display: flex;
        gap: .5rem;
    }

    form {
        margin-top: 2rem;
    }
`;

export const CheckoutPaymentMethod = styled.div`
    background: ${(props) => props.theme['gray-100']};
    border-radius: 6px;
    padding: 2.5rem;

    header {
        display: flex;
        gap: .5rem;
    }

    > div {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        gap: 0.75rem;
    }
`;

export const CheckoutSelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CheckoutSelected = styled.div`
    background: ${(props) => props.theme['gray-100']};
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    padding: 2.5rem;

    > div {
        display: flex;
        justify-content: space-between;
    }

    button {
        margin-top: 1.5rem;
        background: ${(props) => props.theme['yellow']};
        color: ${(props) => props.theme['white-100']};
        border: 0;
        border-radius: 6px;
        padding: 0.75rem 5rem;
        cursor: pointer;
    }
`;