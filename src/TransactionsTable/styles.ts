import styled from "styled-components";

export const Container = styled.div`    
    table{
        border-spacing: 0 0.5rem;
        width: 100%;

        thead th{
            padding: 1rem 2rem;
            text-align: left;

            color: var(--text-body);
            font-weight: 400;
            line-height: 1.5rem;
        }

        tbody{
            background-color: var(--shape);

            td{
                padding: 1rem 2rem;
                color: var(--text-body);

                &:first-child{
                    color: var(--text-title);
                    font-weight: 500;
                }
                &.entrada{
                    color: var(--green);
                }
                &.saida{
                    color: var(--red);
                }
            }
        }
    }
`