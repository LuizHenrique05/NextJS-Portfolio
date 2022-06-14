import styled from 'styled-components';

export const Container = styled.pre`
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme.gradient};

    @media (max-width: 700px) {
        font-size: .8rem;
        white-space: break-spaces;
    }

    span {
        color: ${({theme}) => theme.text};
        display: block;
        font-family: 'JetBrains Mono', monospace;
    }
`;
