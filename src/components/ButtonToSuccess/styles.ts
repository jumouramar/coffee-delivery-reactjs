import styled from "styled-components";

export const ButtonSuccess = styled.button`
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
`;