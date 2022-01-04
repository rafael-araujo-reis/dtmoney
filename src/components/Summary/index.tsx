import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import expenseImg from '../../assets/expense.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entrada" />
                </header>
                <strong>R$ 1.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={expenseImg} alt="saída" />
                </header>
                <strong>-R$ 500,00</strong>
            </div>
            <div className="total">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    );
}