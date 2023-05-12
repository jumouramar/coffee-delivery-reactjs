import styled from "styled-components";

export const HeaderContainer = styled.header`

    background: ${(props) => props.theme['white-100']};
    position: sticky;
    top: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 2rem;

    nav {
        display: flex;
        gap: 0.75rem;

        div {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            background: ${(props) => props.theme['purple-light']};
            color: ${(props) => props.theme['purple-dark']};
            padding: 0.5rem;
            border-radius: 8px;
        }

        a {    
            background: ${(props) => props.theme['yellow-light']};
            color: ${(props) => props.theme['yellow-dark']};
            padding: 0.5rem;
            border-radius: 8px;
            border: none;
            display: flex;
        }
    }
`;