import { Helmet } from 'react-helmet-async'
import { tableTransactionHeaders } from '../../data/transactions'
import RecentTransactionsSection from '../../sections/recent-transactions-section/recent-transactions-section'
import { useTransactions } from '../../utils/contexts/transactions-context'
import { TITLE_PREFIX } from '../../utils/constants'
import BalanceSection from '../../sections/balance-section/balance-section'
import styles from './my-wallet-page.module.css'

export default function MyWalletPage() {
  const { transactions } = useTransactions()

  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} My Wallet</title>
      </Helmet>
      <div className={styles.layout}>
        <BalanceSection />
        <RecentTransactionsSection
          transactions={transactions.slice(0, 5)}
          tableTransactionHeaders={tableTransactionHeaders}
          isLinkable
        />
      </div>
    </>
  )
}
