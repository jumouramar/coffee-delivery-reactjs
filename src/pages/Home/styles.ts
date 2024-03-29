import styled from "styled-components";

export const HomeContainer = styled.main`
    padding: 0 2rem;

    h2 {
        font: 800 2rem 'Baloo 2';
        color: ${props => props.theme['gray-700']};
    }
`;

export const IntroContainer = styled.div`
    display: flex;
    gap: 1rem;
    padding: 5rem 0rem;


    @media (max-width: 1200px) {
        flex-flow: wrap-reverse;
        max-width: 650px;
        text-align: center;
        justify-content: center;
        margin: auto;

        > img {
            width: 25rem;
        }
    }
`;

export const TitleContainer = styled.div`
    h1 {
        font: 800 3rem 'Baloo 2';
        line-height: 4rem;
        color: ${props => props.theme['gray-800']};
        margin-bottom: 1rem;
    }

    h3 {
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 1.7rem;
    }
`;

export const ItemsContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 0;

    @media (max-width: 660px) {
        flex-direction: column;
        align-items: center;
    }
`;

const BACKGROUND_COLORS = {
    orange: 'yellow-dark',
    yellow: 'yellow',
    gray: 'gray-600',
    purple: 'purple',
} as const

interface BackgroundCircleProps {
    backgroundColor: 'orange' | 'yellow' | 'gray' | 'purple';
}

export const Item = styled.div<BackgroundCircleProps>`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-basis: 50%;

    & > :first-child {
        color: ${props => props.theme['white-200']};
        background: ${props => props.theme[BACKGROUND_COLORS[props.backgroundColor]]};
        border: 0.5rem solid ${props => props.theme[BACKGROUND_COLORS[props.backgroundColor]]};
        border-radius: 999px;
    }

    p {
        font-weight: 400;
        font-size: 1rem;
    }
`;

export const CoffeeListContainer = styled.div`
    padding: 3rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.5rem 2rem;
`;
