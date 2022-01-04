import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from './services/api';

interface TransactionsProviderProps {
    children: ReactNode;
}

interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>

export const TransactionsContext = createContext<Transaction[]>([])

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}

// export function TransactionsContextProvider() {
//     children: ReactNode
//     return TransactionsContext;
// }

// useEffect(() => {
//     api('transactions')
//         .then(response => setTransactions(response.data.transactions))
// }, []);