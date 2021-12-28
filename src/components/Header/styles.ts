import styled from "styled-components";

export const Container = styled.header`
    background: var(--blue);
    padding: 1rem 2rem 10rem;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    button{
        padding: 1rem 2rem;
        border-radius: 0.25rem;
        border: none;
        
        background-color: var(--blue-light);
        color: var(--white);

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`