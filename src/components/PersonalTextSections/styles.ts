import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 3rem;

    .textBox {
        background: ${({theme}) => theme.gradient};
        border: 1px solid #202637;
        padding: 2rem;

        h3 {
            color: ${({theme}) => theme.primary};
            font-size: 1.2rem;
            line-height: 1.5;
            margin-bottom: 1rem;
        }

        p {
            color: #fff;
            line-height: 1.5;
            font-size: .9rem;
            margin-bottom: 1.5rem;
        }

        .motivational {
            margin-top: 4rem;
            text-align: center;
            color: #989ca7;
        }
    }
`;
