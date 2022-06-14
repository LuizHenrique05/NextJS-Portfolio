import { darken } from 'polished';
import styled from 'styled-components';

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    > main {
        margin: 2rem auto;
        width: 100%;
        padding: 0 5rem;
        min-height: 50vh;

        pre {
            color: ${({theme}) => theme.textLight};
            font-size: 1.2rem;
            font-weight: 300;
            text-align: justify;
            white-space: break-spaces;
        }

        button {
            background: ${({theme}) => theme.primary};
            padding: .5rem 1.5rem;
            border-radius: .5rem;
            border: none;
            transition: all ease .5s;
            margin-top: 2rem;

            &:hover {
                background: ${({theme}) => darken(0.1, theme.primary)};
            }

            a {
                color: #333;
                text-transform: uppercase;
                font-size: 1rem;
                font-weight: bold;
            }
        }

        @media (max-width: 700px) {
            padding: 0 2.5rem;

            p {
                font-size: 1rem;
            }

            button {
                a {
                    font-size: .9rem;
                }
            }
        }
    }
`;