import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    
    .study {
        margin: 2rem;
        padding: 2rem;
        background: ${({theme}) => theme.gradient};
        color: #fff;
        line-height: 1.5;
        max-height: 40rem;
        overflow-y: auto;

        @media (max-width: 500px) {
            margin: 2rem 0;
            padding: 1rem;
            max-height: 30rem;
        }

        .next {
            margin-top: 1rem;
            font-weight: bold;
        }
        
        ul {
            li  {
                padding-left: 1rem; 
            }
        }
    }
`;
