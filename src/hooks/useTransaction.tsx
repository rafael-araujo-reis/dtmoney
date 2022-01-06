import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

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

interface TransactionContextData {
    transactions: Transaction[],
    createTransaction: (transaction: TransactionInput) => Promise<void>; //Função async retorna promise
}

type TransactionInput = Omit<Transaction, 'id' | 'createAt'>

type ApiResponseType = {
    data: {
        transactions: [{
            id: number,
            title: string,
            amount: number,
            type: string,
            category: string,
            createAt: string
        }]
    }
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

export function useTransactions() {
    const context = useContext(TransactionContext);
    return context;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    // Criar transação
    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createAt: new Date(),
        })
        const { transaction } = response.data;
        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}