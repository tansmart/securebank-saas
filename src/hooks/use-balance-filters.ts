import { useSearchParams } from 'react-router-dom'
import { BalanceFilter, CreditCard, CreditCardBalance } from '../utils/types'
import generateDateInPast from '../utils/helpers/date-generators'
import { dateChecker } from '../utils/helpers/date-checkers'

export default function useBalanceFilters() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get('balance') as BalanceFilter

  function setFilter(key: BalanceFilter) {
    setSearchParams((prevParams) => {
      prevParams.set('balance', key)
      return prevParams
    })
  }

  function getDailyCreditCardBalance(creditCard: CreditCard) {
    const creditCardBalances = [...creditCard.balance]
      .slice(0, 5)
      .filter(({ time }) => dateChecker(time, new Date()))
      .reverse()

    if (creditCardBalances.length < 2) {
      return [...creditCardBalances, ...creditCardBalances]
    }

    return creditCardBalances
  }

  function getWeeklyCreditCardBalance(
    creditCard: CreditCard,
    weeksAgo: number
  ) {
    const creditCardBalances = [...creditCard.balance]

    const weekDates = new Array(7)
      .fill(null)
      .map((_, i) => generateDateInPast(i + 7 * weeksAgo, 0, 0, 0))

    const weeklyBalances: CreditCardBalance[] = weekDates
      .map((date) => {
        const balance = creditCardBalances.find(({ time }) =>
          dateChecker(time, date)
        )!

        return {
          amount: balance.amount,
          time: balance.time,
        }
      })
      .reverse()

    return weeklyBalances
  }

  function getMonthlyCreditCardBalance(creditCard: CreditCard) {
    const creditCardBalances = [...creditCard.balance]

    const weekDates = [
      generateDateInPast(0, 0, 0, 0),
      generateDateInPast(7, 0, 0, 0),
      generateDateInPast(14, 0, 0, 0),
      generateDateInPast(21, 0, 0, 0),
    ]

    const weeklyBalances: CreditCardBalance[] = weekDates
      .map((date) => {
        const balance = creditCardBalances.find(({ time }) =>
          dateChecker(time, date)
        )!

        return {
          amount: balance.amount,
          time: balance.time,
        }
      })
      .reverse()

    return weeklyBalances
  }

  function getCreditCardFilteredBalance(
    creditCard: CreditCard
  ): CreditCardBalance[] {
    switch (filter) {
      case 'Daily':
        return getDailyCreditCardBalance(creditCard)
      case 'Weekly':
        return getWeeklyCreditCardBalance(creditCard, 0)
      case 'Monthly':
        return getMonthlyCreditCardBalance(creditCard)
      default:
        return getDailyCreditCardBalance(creditCard)
    }
  }

  function getAllWeeklyCreditCardBalances(
    creditCards: CreditCard[]
  ): CreditCardBalance[] {
    const weekDates = [
      generateDateInPast(0, 0, 0, 0),
      generateDateInPast(1, 0, 0, 0),
      generateDateInPast(2, 0, 0, 0),
      generateDateInPast(3, 0, 0, 0),
      generateDateInPast(4, 0, 0, 0),
      generateDateInPast(5, 0, 0, 0),
      generateDateInPast(6, 0, 0, 0),
    ]

    return weekDates
      .map((date) => {
        const balances = creditCards.map((creditCard) => {
          const creditCardBalances = [...creditCard.balance]

          const balance = creditCardBalances.find(({ time }) =>
            dateChecker(time, date)
          )!

          if (!balance) {
            return {
              amount: 0,
              time: new Date(),
            }
          }

          return {
            amount: balance.amount,
            time: balance.time,
          }
        })

        const amount = balances.reduce((acc, { amount }) => acc + amount, 0)

        return {
          amount,
          time: balances[0].time,
        }
      })
      .reverse()
  }

  function getAllMonthlyCreditCardBalances(
    creditCards: CreditCard[]
  ): CreditCardBalance[] {
    const weekDates = [
      generateDateInPast(0, 0, 0, 0),
      generateDateInPast(7, 0, 0, 0),
      generateDateInPast(14, 0, 0, 0),
      generateDateInPast(21, 0, 0, 0),
    ]

    return weekDates
      .map((date) => {
        const balances = creditCards.map((creditCard) => {
          const creditCardBalances = [...creditCard.balance]

          const balance = creditCardBalances.find(({ time }) =>
            dateChecker(time, date)
          )!

          if (!balance) {
            return {
              amount: 0,
              time: new Date(),
            }
          }

          return {
            amount: balance.amount,
            time: balance.time,
          }
        })

        const amount = balances.reduce((acc, { amount }) => acc + amount, 0)

        return {
          amount,
          time: balances[0].time,
        }
      })
      .reverse()
  }

  function getCreditCardsFilteredBalances(
    creditCards: CreditCard[]
  ): CreditCardBalance[] {
    switch (filter) {
      case 'Weekly':
        return getAllWeeklyCreditCardBalances(creditCards)
      case 'Monthly':
        return getAllMonthlyCreditCardBalances(creditCards)
      default:
        return getAllWeeklyCreditCardBalances(creditCards)
    }
  }

  return {
    filter,
    setFilter,
    getCreditCardFilteredBalance,
    getCreditCardsFilteredBalances,
  }
}
