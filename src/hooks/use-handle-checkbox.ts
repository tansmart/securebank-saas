import { FilterKey, Sort } from '../utils/types'
import useTransactionFilters from './use-transaction-filters'
import useTransactionSorts from './use-transaction-sorts'

export default function useHandleCheckbox() {
  const { purpose, creditCard, type } = useTransactionFilters()
  const { sort } = useTransactionSorts()

  function handleCheckbox(key: FilterKey | Sort): boolean {
    return [...purpose, ...creditCard, ...type, sort].includes(key)
  }

  return { handleCheckbox }
}
