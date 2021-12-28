import { Container } from "./styles";
import entradaImg from '../../assets/entrada.svg'
import saidaImg from '../../assets/saida.svg'
import totalImg from '../../assets/total.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={entradaImg} alt="entrada" />
                </header>
                <strong>R$ 1.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={saidaImg} alt="saída" />
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