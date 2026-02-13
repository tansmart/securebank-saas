import { useSearchParams } from 'react-router-dom'

export default function useTransaction() {
  const [searchParams, setSearchParams] = useSearchParams()
  const transactionId = searchParams.get('transaction')

  function setTransactionId(id: string) {
    setSearchParams((prevParams) => {
      prevParams.set('transaction', id)
      return prevParams
    })
  }

  function removeTransactionId(id: string) {
    setSearchParams((prevParams) => {
      prevParams.delete('transaction', id)
      return prevParams
    })
  }

  return { transactionId, searchParams, setTransactionId, removeTransactionId }
}
