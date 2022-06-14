import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    
    &:first-child {
        margin-top: 0;
    }

    h3 {
        color: ${({theme}) => theme.text};
        font-size: 2rem;
        line-height: 1.5;
        margin-bottom: 1rem;
    }

    > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;    
        
        @media (max-width: 1000px) {
            grid-template-columns: 1fr 1fr;
        }
    
        @media (max-width: 500px) {
            grid-template-columns: 1fr;
        }
    }


    .empty {
        color: ${({theme}) => theme.text};
        font-size: .9rem;
    }
`;
