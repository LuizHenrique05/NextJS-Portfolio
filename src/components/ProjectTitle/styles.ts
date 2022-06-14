import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: ${({theme}) => theme.gradient};
    height: 10rem;
    position: relative;
    padding: 2rem 5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    &:hover {
        border-color: ${({theme}) => theme.primary};

        > .overlay {
            background: rgba(0, 0, 0, 0.1);
        }
    }

    section {
        z-index: 2;

        h1 {
            color: ${({theme}) => theme.primary};
            font-size: 2rem;
        }

        h2 {
            color: ${({theme}) => theme.secondary};
            font-weight: 300;
            font-size: 1.5rem;
        }
    }

    > .overlay {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
        transition: all ease .5s;
    }

    @media (max-width: 700px) {
        padding: 1rem 2.5rem; 
        height: 8rem;
    }

    @media (max-width: 350px) {
        padding: 1rem;
    }
`;
