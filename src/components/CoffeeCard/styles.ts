import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${(props) => props.theme['gray-100']};
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    width: 13.5rem;
    padding: 0 1.5rem;

    text-align: center;
    
    img {
        margin-top: calc(0px - 1.5rem);
    }

    > strong {
        font: 700 1.25rem 'Baloo 2';
        color: ${(props) => props.theme['gray-700']};
    }

    > p {
        font: 400 0.875rem 'Roboto';
        color: ${(props) => props.theme['gray-500']};
        margin: 0.5rem;
    }
`;

export const CoffeeType = styled.div`
    color: ${(props) => props.theme['yellow-dark']};;
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 50px;
    padding: .5rem;
    margin: 1rem;

    font: 700 0.625rem 'Roboto';
    text-transform: uppercase;
`;

export const CoffeeFooter = styled.footer`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    
    margin: 1.25rem 0;

    div {
        display: flex;
        align-items: center;
        gap: .5rem;

        > strong {
            font: 800 1.5rem 'Baloo 2';
        }
    }

    button {   
        padding: 0.5rem;
        border-radius: 8px;
        border: none;
        display: flex;
        cursor: pointer;
    }
`;

export const CoffeeCounter = styled.div`
    background: ${(props) => props.theme['gray-300']};
    border-radius: 6px;
    button {
        color: ${(props) => props.theme['purple']};
        font-size: 1.1rem;
    }   
`;

export const CoffeeButton = styled.button`
    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['gray-100']};
`;