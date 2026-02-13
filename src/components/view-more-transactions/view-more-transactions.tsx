import { DASHBOARD_ROUTE } from '../../utils/constants'
import styles from './view-more-transactions.module.css'
import Button from '../button/button'

export default function ViewMoreTransactions() {
  return (
    <div className={styles.wrapper}>
      <Button href={`${DASHBOARD_ROUTE}recent-transactions`} variant="link">
        View More Transactions
      </Button>
    </div>
  )
}
