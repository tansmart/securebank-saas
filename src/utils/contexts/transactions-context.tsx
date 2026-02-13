import { createContext, useContext, useEffect, useState } from 'react'
import { transactions as transactionsData } from '../../data/transactions'
import { Transaction } from '../types'

type TransactionsContextProviderProps = {
  children: React.ReactNode
}

type TransactionsContextType = {
  transactions: Transaction[]
  addNewTransaction: (newTransaction: Transaction) => void
}

export const TransactionsContext =
  createContext<TransactionsContextType | null>(null)

function getInitialTransactions(): Transaction[] {
  const transactions = localStorage.getItem('transactions')
  return transactions ? JSON.parse(transactions) : transactionsData
}

export default function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState(getInitialTransactions)

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  function addNewTransaction(newTransaction: Transaction) {
    setTransactions((currentTransactions: Transaction[]) => [
      { ...newTransaction, id: transactions[0].id + 1 },
      ...currentTransactions,
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, addNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)
  if (!context) {
    throw new Error(
      'useTransactions must be within a TransactionsContextProvider'
    )
  }

  return context
}
