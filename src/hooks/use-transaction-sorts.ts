import { useSearchParams } from 'react-router-dom'
import useTransactionFilters from './use-transaction-filters'
import { Sort } from '../utils/types'

export default function useTransactionSorts() {
  const [searchParams, setSearchParams] = useSearchParams()
  const sort = searchParams.get('sort') as Sort
  const { filteredTransactions } = useTransactionFilters()

  function sortTransactions() {
    switch (sort) {
      case 'Name-Asc':
        return filteredTransactions.sort((a, b) => {
          const nameA = a.type === 'Sent' ? a.receiverName : a.senderName
          const nameB = b.type === 'Sent' ? b.receiverName : b.senderName

          if (nameA > nameB) return 1
          if (nameA < nameB) return -1
          return 0
        })
      case 'Name-Desc':
        return filteredTransactions.sort((a, b) => {
          const nameA = a.type === 'Sent' ? a.receiverName : a.senderName
          const nameB = b.type === 'Sent' ? b.receiverName : b.senderName

          if (nameA < nameB) return 1
          if (nameA > nameB) return -1
          return 0
        })
      case 'Price-Asc':
        return filteredTransactions.sort((a, b) => a.amount - b.amount)
      case 'Price-Desc':
        return filteredTransactions.sort((a, b) => b.amount - a.amount)
      case 'Date-Asc':
        return filteredTransactions.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        )
      case 'Date-Desc':
        return filteredTransactions.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      default:
        return filteredTransactions
    }
  }

  function setSort(key: Sort) {
    setSearchParams((prevParams) => {
      prevParams.set('sort', key)
      return prevParams
    })
  }

  function removeSort(key: Sort) {
    setSearchParams((prevParams) => {
      prevParams.delete('sort', key)
      return prevParams
    })
  }

  return { sort, sortTransactions, setSort, removeSort }
}
