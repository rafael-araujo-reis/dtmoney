import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createAt: string
}

export function TransactionsTable() {

    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        api('transactions')
            .then(response => setTransactions(response.data.transactions))
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
                    {/* {console.log(transactions.length)} */}
                    {transactions.map(transaction =>
                    (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>{transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createAt}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </Container>
    );
}