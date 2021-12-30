import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenModalNewTransaction: () => void;
}

export function Header({ onOpenModalNewTransaction }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenModalNewTransaction}>Nova transação</button>
            </Content>
        </Container>
    );
}