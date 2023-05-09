import styled from "styled-components";

export const ButtonDelete = styled.button`
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 0.5rem;
    background: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['purple']};
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background: ${(props) => props.theme['gray-400']};
    }
`;