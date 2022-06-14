import styled from 'styled-components';

export const Container = styled.div`
    > a {
        position: relative;
        width: 100%;
        background: ${({theme}) => theme.gradient};
        height: 10rem;
        padding: 1.5rem;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        border-radius: .5rem;
        border: 1px solid ${({theme}) => theme.border};
        transition: all ease .5s;
        cursor: pointer;
        overflow: hidden;

        &:hover {
            border-color: ${({theme}) => theme.primary};

            > .overlay {
                background: rgba(0, 0, 0, 0.1);
            }
        }

        > section {
            z-index: 2;
            
            h1 {
                color: ${({theme}) => theme.primary};
                font-size: 1.5rem;
                margin-bottom: .3rem;
            }

            h2 {
                color: ${({theme}) => theme.secondary};
                font-weight: 300;
                font-size: 1rem;
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
    }
`;
