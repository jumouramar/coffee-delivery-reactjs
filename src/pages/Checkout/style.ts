import styled from "styled-components";

export const CheckoutContainer = styled.main`
    padding: 2.5rem 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    
    h4 {
        font: 700 1.125rem 'Baloo 2';
        color: ${(props) => props.theme['gray-700']};
    }

    strong {
        font: 400 1rem 'Roboto';
        line-height: 1.3125rem;
        color: ${(props) => props.theme['gray-700']};
    }

    p {
        font: 400 0.875rem 'Roboto';
        line-height: 1.125rem;
        color: ${(props) => props.theme['gray-600']};
    }
`;

export const CheckoutOrder = styled.div`
    max-width: 640px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CheckoutAdressAndPayment = styled.div`

    background: ${(props) => props.theme['gray-100']};
    border-radius: 6px;
    padding: 2.5rem;
    
    header {
        display: flex;
        gap: .5rem;
        margin-bottom: 2rem;
    }

    > div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 0.75rem;
    }

    > form {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        
    }
`;

export const PaymentButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 1rem;
    background: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['purple']};
    border: 1px solid transparent;
    border-radius: 6px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background: ${(props) => props.theme['gray-400']};
    }

    &:focus {
        background: ${(props) => props.theme['purple-light']};
        border: 1px solid ${(props) => props.theme['purple']};
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

        &:hover {
            background: ${(props) => props.theme['yellow-dark']};
        }
    }
`;