import styled from "styled-components";

export const Container = styled.form`
    h2{
        margin-bottom: 1.5rem;
    }

    input{
        width: 100%;
        padding: 0.8rem;

        border: 1px solid #d7d7d7;
        background-color: #E7E9EE;

        & + input{
            margin-top: 1rem;
        }

        &::placeholder{
            color: var(--text-body)
        }
    }

    button[type=submit]{
        width: 100%;

        border: none;
        background-color: var(--green);
        color: var(--white);

        padding: 0.8rem;
        margin-top: 2rem;

        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`