import Section from '../section/section'
import styles from './filter-section.module.css'
import useTransactionFilters from '../../hooks/use-transaction-filters'
import { useTransactions } from '../../utils/contexts/transactions-context'
import FilterButtons from './filter-buttons/filter-buttons'
import AppliedFilters from './applied-filters/applied-filters'

export default function FiltersSection() {
  const { filteredTransactions } = useTransactionFilters()
  const { transactions } = useTransactions()

  return (
    <Section>
      <h2>Filters</h2>
      <FilterButtons />
      <div className={styles.results}>
        <h3 className={styles.resultsHeading}>
          Showing {filteredTransactions.length} of {transactions.length} results
        </h3>
        <AppliedFilters />
      </div>
    </Section>
  )
}
