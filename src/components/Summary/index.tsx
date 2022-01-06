import { useTransactions } from "../../hooks/useTransaction";

import { Container } from "./styles";

import incomeImg from '../../assets/income.svg'
import expenseImg from '../../assets/expense.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
    const { transactions } = useTransactions()
    console.log('sumary: ', transactions)

    const sumary = transactions.reduce((acumulator, transaction) => {
        console.log('achar erro: ', transaction)
        // if (transaction.type === 'deposit') {
        //     acumulator.income += transaction.amount;
        //     acumulator.total += transaction.amount;
        // } else {
        //     acumulator.expense += transaction.amount;
        //     acumulator.total -= transaction.amount;
        // }
        return acumulator;
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
                {/* <strong>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.income)}
                </strong> */}
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={expenseImg} alt="saída" />
                </header>
                {/* <strong>-{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.expense)}
                </strong> */}
            </div>
            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                {/* <strong>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumary.total)}
                </strong> */}
            </div>
        </Container>
    );
}