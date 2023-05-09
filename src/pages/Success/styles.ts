import styled from "styled-components";

export const SuccessContainer = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 2.5rem 2rem;
`;

export const SuccessTitle = styled.div`
    strong {
        color: ${(props) => props.theme['yellow-dark']};
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 32px;
        line-height: 130%;
    }

    p {
        color: ${(props) => props.theme['gray-700']};
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 130%;
    }
`;

export const SuccessInfoAndImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    flex-wrap: wrap;
`;

export const OrderInfo = styled.div`
    background: linear-gradient(${(props) => props.theme['white-100']}, ${(props) => props.theme['white-100']}) padding-box, linear-gradient(to right, ${(props) => props.theme['yellow']}, ${(props) => props.theme['purple']}) border-box;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border: 1px solid transparent;
   
    width: 27rem;
    padding: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    > div {
        display: flex;
        gap: 0.75rem;
        align-items: center;

        & > :first-child {
            color: ${(props) => props.theme['white-100']};
            background: ${(props) => props.theme['purple']};
            border: 0.5rem solid ${(props) => props.theme['purple']};
            border-radius: 999px;
        }
    }

    p {
        color: ${(props) => props.theme['gray-600']};
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
    }

    strong {
        color: ${(props) => props.theme['gray-600']};
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 130%;
    }
`;