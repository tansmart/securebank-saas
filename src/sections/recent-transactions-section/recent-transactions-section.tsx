import Section from '../section/section'
import Table from '../../components/table/table'
import { TableTransactionHeader, Transaction } from '../../utils/types'
import NoResults from '../../components/no-results/no-results'
import ViewMoreTransactions from '../../components/view-more-transactions/view-more-transactions'

type RecentTransactionsSectionProps = {
  transactions: Transaction[]
  tableTransactionHeaders: TableTransactionHeader[]
  isLinkable?: boolean
  withNoResultsButton?: boolean
}

export default function RecentTransactionsSection({
  transactions,
  tableTransactionHeaders,
  isLinkable,
  withNoResultsButton,
}: RecentTransactionsSectionProps) {
  return (
    <Section>
      <h2>Recent Transactions</h2>
      {transactions.length > 0 ? (
        <>
          <Table
            transactions={transactions}
            tableTransactionHeaders={tableTransactionHeaders}
          ></Table>
          {isLinkable && <ViewMoreTransactions />}
        </>
      ) : (
        <NoResults withButton={withNoResultsButton} />
      )}
    </Section>
  )
}
