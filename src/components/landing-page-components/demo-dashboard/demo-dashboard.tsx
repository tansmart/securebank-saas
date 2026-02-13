import { tableTransactionHeaders } from '../../../data/transactions'
import BalanceSection from '../../../sections/balance-section/balance-section'
import RecentTransactionsSection from '../../../sections/recent-transactions-section/recent-transactions-section'
import { useTransactions } from '../../../utils/contexts/transactions-context'
import Sidebar from '../../sidebar/sidebar'
import styles from './demo-dashboard.module.css'

export default function DemoDashboard() {
  const { transactions } = useTransactions()

  return (
    <div className={styles.dashboard}>
      <div id="app-layout" className={styles.layout}>
        <Sidebar />
        <div className={styles.pageWrapper}>
          <div className={styles.container}>
            <BalanceSection />
            <RecentTransactionsSection
              transactions={transactions.slice(0, 5)}
              tableTransactionHeaders={tableTransactionHeaders}
              isLinkable
            />
          </div>
        </div>
      </div>
    </div>
  )
}
