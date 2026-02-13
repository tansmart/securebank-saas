import { createContext, useContext, useEffect, useState } from 'react'
import { creditCards as creditCardsData } from '../../data/credit-cards'
import { CreditCard } from '../types'

type CreditCardsContextProviderProps = {
  children: React.ReactNode
}

type CreditCardsContextType = {
  creditCards: CreditCard[]
  getPreviousCreditCardBalance: (index: number) => number
  getPreviousCreditCardExpense: (index: number) => number
  getCreditCardById: (id: number) => CreditCard
  getCreditCardByIndex: (index: number) => CreditCard
  getCreditCardBalance: (creditCard: CreditCard) => number
  getCreditCardExpenses: (creditCard: CreditCard) => number
  getSortedCreditCards: () => CreditCard[]
  activeCreditCards: CreditCard[]
  totalBalance: number
  changeCreditCardStatus: (id: number) => void
  removeCreditCard: (index: number) => void
  removeCreditCardById: (cardId: number) => void
  addNewCreditCard: (newCreditCard: CreditCard) => void
  updateBalanceAndExpenses: (
    creditCard: CreditCard,
    amount: number,
    time: Date
  ) => void
}

export const CreditCardsContext = createContext<CreditCardsContextType | null>(
  null
)

function getInitialCreditCards() {
  const creditCards = localStorage.getItem('credit-cards')
  return creditCards ? JSON.parse(creditCards) : creditCardsData
}

export default function CreditCardsContextProvider({
  children,
}: CreditCardsContextProviderProps) {
  const [creditCards, setCreditCards] = useState<CreditCard[]>(
    getInitialCreditCards
  )

  useEffect(() => {
    localStorage.setItem('credit-cards', JSON.stringify(creditCards))
  }, [creditCards])

  function getSortedCreditCards() {
    return creditCards.sort((a, b) => a.id - b.id)
  }

  const activeCreditCards = getSortedCreditCards().filter(
    ({ isActive }) => isActive
  )

  const totalBalance = creditCards.reduce(
    (acc, { balance }) => acc + balance[0].amount,
    0
  )

  function getPreviousCreditCardBalance(index: number) {
    return getCreditCardByIndex(index)?.balance[0].amount || 0
  }

  function getPreviousCreditCardExpense(index: number) {
    return getCreditCardByIndex(index)?.expenses[0].amount || 0
  }

  function getCreditCardById(id: number) {
    return creditCards.find((creditCard) => creditCard.id === id)!
  }

  function getCreditCardByIndex(index: number) {
    return creditCards[index]
  }

  function getCreditCardBalance(creditCard: CreditCard) {
    return creditCard.balance[0].amount
  }

  function getCreditCardExpenses(creditCard: CreditCard) {
    return creditCard.expenses[0].amount
  }

  function changeCreditCardStatus(id: number) {
    const matchingCreditCard = getCreditCardById(id)

    setCreditCards((prevCreditCards) => [
      ...prevCreditCards.filter(({ id }) => id !== matchingCreditCard.id),
      { ...matchingCreditCard, isActive: !matchingCreditCard.isActive },
    ])
  }

  function removeCreditCard(cardIndex: number) {
    setCreditCards((prevCreditCards) =>
      prevCreditCards.filter((_, index) => index !== cardIndex)
    )
  }

  function removeCreditCardById(cardId: number) {
    setCreditCards((prevCreditCards) =>
      prevCreditCards.filter(({ id }) => id !== cardId)
    )
  }

  function addNewCreditCard(newCreditCard: CreditCard) {
    setCreditCards((prevCreditCards) => [
      ...prevCreditCards,
      { ...newCreditCard, id: creditCards[creditCards.length - 1].id + 1 },
    ])
  }

  function updateBalanceAndExpenses(
    creditCard: CreditCard,
    amount: number,
    time: Date
  ) {
    setCreditCards((prevCreditCards) => {
      const matchingCreditCard = prevCreditCards.find(
        ({ id }) => id === creditCard.id
      )!

      return [
        ...prevCreditCards.filter(({ id }) => id !== matchingCreditCard.id),
        {
          ...matchingCreditCard,
          balance: [
            {
              amount: matchingCreditCard.balance[0].amount - amount,
              time,
            },
            ...matchingCreditCard.balance,
          ],
          expenses: [
            {
              amount: matchingCreditCard.expenses[0].amount + amount,
              time,
            },
            ...matchingCreditCard.expenses,
          ],
        },
      ]
    })
  }

  return (
    <CreditCardsContext.Provider
      value={{
        creditCards,
        getSortedCreditCards,
        activeCreditCards,
        totalBalance,
        getPreviousCreditCardBalance,
        getPreviousCreditCardExpense,
        getCreditCardById,
        getCreditCardByIndex,
        getCreditCardBalance,
        getCreditCardExpenses,
        changeCreditCardStatus,
        removeCreditCard,
        removeCreditCardById,
        addNewCreditCard,
        updateBalanceAndExpenses,
      }}
    >
      {children}
    </CreditCardsContext.Provider>
  )
}

export const useCreditCards = () => {
  const context = useContext(CreditCardsContext)
  if (!context) {
    throw new Error(
      'useCreditCards must be within a CreditCardsContextProvider'
    )
  }

  return context
}
