import { useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import entradaImg from '../../assets/entrada.svg'
import saidaImg from '../../assets/saida.svg'
import { Container, RadioBox, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root')
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState('');

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
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
                />
                <input
                    type="number"
                    placeholder="Valor"
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
                />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}