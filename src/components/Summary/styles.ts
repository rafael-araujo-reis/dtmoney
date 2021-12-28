import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    transform: translateY(-50%);

    header{
        display: flex;
        justify-content: space-between;
    }

    div{
        padding: 1rem 2rem;

        background-color: var(--shape);
        color: var(--text-title);

        border-radius: 0.5rem;

        strong{
            font-size: 2rem;
            font-weight: 500;
        }

        &.total{
            background-color: var(--green);
            color: var(--white);
        }
    }
`