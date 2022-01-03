import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import entradaImg from '../../assets/entrada.svg'
import saidaImg from '../../assets/saida.svg'
import { api } from '../../services/api'
import { Container, RadioBox, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

// interface Transaction {
//     id: number,
//     title: string,
//     amount: number,
//     type: string,
//     category: string,
//     createAt: string
// }

Modal.setAppElement('#root')
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('deposit');
    const [category, setCategory] = useState('')

    const [transaction, setTransaction] = useState([])

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title, amount, type, category
        }

        api.post('/transactions', data)
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container onSubmit={handleCreateNewTransaction}>
                <button
                    className="react-modal-close"
                    onClick={onRequestClose}
                >
                    <img src={closeImg} alt="Fechar modal" />
                </button>
                <h2>Cadastrar transação</h2>
                <input
                    type="text"
                    placeholder='Título'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor={'green'}
                    >
                        <img src={entradaImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor={'red'}
                    >
                        <img src={saidaImg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    type="text"
                    placeholder='Categoria'
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}