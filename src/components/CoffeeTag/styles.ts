import styled from "styled-components";

export const CoffeeType = styled.div`
    color: ${(props) => props.theme['yellow-dark']};;
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 50px;
    padding: .25rem .5rem;
    margin: .75rem 0 1rem 0;

    font: 700 0.625rem 'Roboto';
    text-transform: uppercase;
`;