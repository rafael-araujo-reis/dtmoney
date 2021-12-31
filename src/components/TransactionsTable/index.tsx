import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api('transactions')
            .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Freelance Doce Imaculada</td>
                        <td className="deposit">R$450,00</td>
                        <td>Freelance</td>
                        <td>15/10/2021</td>
                    </tr>
                    <tr>
                        <td>Salário</td>
                        <td className="deposit">R$5.100,00</td>
                        <td>Salário</td>
                        <td>29/10/2021</td>
                    </tr>
                    <tr>
                        <td>Curso Rocketseat</td>
                        <td className="withdraw">-R$798,88</td>
                        <td>Estudos</td>
                        <td>20/12/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}