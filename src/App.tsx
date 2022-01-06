import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransaction";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenModalNewTransaction() {
    setIsNewTransactionModalOpen(true)
  }
  function handleCloseModalNewTransaction() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenModalNewTransaction={handleOpenModalNewTransaction} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseModalNewTransaction}
      />
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
