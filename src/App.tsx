import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenModalNewTransaction() {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseModalNewTransaction() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenModalNewTransaction={handleOpenModalNewTransaction} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseModalNewTransaction}
      />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
