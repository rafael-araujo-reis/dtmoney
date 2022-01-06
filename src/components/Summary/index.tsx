import { useTransactions } from "../../hooks/useTransaction";

import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import expenseImg from '../../assets/expense.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
    const { transactions } = useTransactions()

    const summary = transactions.reduce((accumulator, transaction) => {
        if (transaction.type === 'deposit') {
            accumulator.income += transaction.amount;
            accumulator.total += transaction.amount;
        } else {
            accumulator.expense += transaction.amount;
            accumulator.total -= transaction.amount;
        }
        return accumulator;
    }, {
        income: 0,
        expense: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entrada" />
                </header>
                <strong>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.income)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={expenseImg} alt="saída" />
                </header>
                <strong>-{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.expense)}
                </strong>
            </div>
            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );
}