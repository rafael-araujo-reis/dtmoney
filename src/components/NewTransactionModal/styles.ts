import styled from "styled-components";
import { darken, transparentize } from 'polished'

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'red' | 'green'
}

const colors = {
    red: '#E62E4D',
    green: '#33CC95'
}

export const Container = styled.form`
    h2{
        margin-bottom: 1.5rem;
        color: var(--text-title);
        font-size: 1.5rem;
    }

    input{
        width: 100%;
        padding: 0.8rem;
        height: 4rem;

        font-weight: 400;
        font-size: 1rem;

        border: 1px solid var(--border);
        background-color: var(--gray);
        border-radius: 0.25rem;

        & + input{
            margin-top: 1rem;
        }

        &::placeholder{
            color: var(--text-body)
        }
    }

    button[type=submit]{
        width: 100%;

        font-size: 1rem;
        font-weight: 600;
        height: 4rem;

        border: none;
        border-radius: 0.25rem;
        background-color: var(--green);
        color: var(--white);

        padding: 0 1.5rem;
        margin-top: 1.5rem;

        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

    margin: 1rem 0;
`

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    padding: 1rem;
    display: flex;

    justify-content: center;
    align-items: center;

    border: 1px solid var(--border);
    border-radius: 0.25rem;
    background: ${(props) => props.isActive ?
        transparentize(0.9, props.activeColor) :
        'transparent'
    };
    
    transition: border-color 0.3s;
    
    :hover{
        border-color: ${darken(0.1, '#d7d7d7')};
    }

    img{
        width: 20px;
        height: 20px;
    }
    
    span{
        font-size: 1rem;
        color: var(--text-title);
        margin-left: 0.5rem;
    }
`
