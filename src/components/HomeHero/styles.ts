import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;

    > .image-div {
        border-radius: 50%;
        flex: 1 1 40%;
        width: 30rem;
        text-align: center;
        height: 30rem;

        img {
            max-height: 100%;
            width: auto;
            border-radius: 50%;
        }
    }

    > .content-div {
        flex: 1 1 40%;
    }

    @media (max-width: 1000px) {
        > .image-div {
            width: 22rem;
            height: 22rem;
        }
    }

    @media (max-width: 700px) {
        flex-direction: column-reverse;

        > .content-div {
            width: 100%;
        }
    }
`;

export const TextContainer = styled.section`
    margin-bottom: 2rem;
    width: 100%;

    h1 {
        font-size: 6rem;
        color: ${({theme}) => theme.primary};
    }

    h2 {
        font-size: 2rem;
        font-weight: 400;
        color: ${({theme}) => theme.secondary};
    }

    @media (max-width: 1450px) {
        h1 {
            font-size: 4rem;
        }

        h2 {
            font-size: 1.5rem;
        }
    }

    @media (max-width: 1000px) {
        h1 {
            font-size: 3rem;
        }
    }

`;

export const InfosContainer = styled.section`
    width: 100;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const CodeItem = styled.pre`
    background: ${({theme}) => theme.gradient};
    padding: 2rem;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 300;
    color: #fff;
    width: 24rem;
    align-self: flex-start;
    transition: all ease 1s;

    @media (max-width: 1450px) {
        width: 18rem;
        padding: 1.5rem;
        font-size: .8rem;
    }

    @media (max-width: 1000px) {
        width: 100%;
    }

    &:hover {
        filter: brightness(1.2);
    }

    &:last-child {
        align-self: flex-end;
    }

    > div {
        margin: 0.2rem 0;
        margin-left: 1rem;
    }

    span.purple {
        color: #c38cdd;
    }

    span.blue {
        color: #7ac7e3;
    }

    span.comment {
        color: ${({theme}) => theme.text};
        margin-bottom: 1rem;
        display: block;
    }
    
`;