import styles from './transaction-details-card.module.css'
import XIcon from '../../icons/x-icon'
import Button from '../button/button'
import TransactionInformations from '../transaction-informations/transaction-informations'
import TextArea from '../text-area/text-area'
import { mediumDateFormatter } from '../../utils/helpers/date-formatters'
import getTransactionSign from '../../utils/helpers/get-transaction-sign'
import { useTransactions } from '../../utils/contexts/transactions-context'
import useTransaction from '../../hooks/use-transaction'
import CurrencyAnimation from '../currency-animation/currency-animation'

export default function TransactionDetailsCard() {
  const { transactions } = useTransactions()
  const { transactionId, removeTransactionId } = useTransaction()

  if (!transactionId) return

  const transaction = transactions.find(
    (transaction) => transaction.id === parseInt(transactionId)
  )

  if (!transaction) return

  const {
    amount,
    creditCard,
    date,
    id,
    message,
    purpose,
    receiverImage,
    receiverName,
    senderImage,
    senderName,
    type,
  } = transaction

  return (
    <article className={styles.card}>
      <div className={styles.head}>
        <h1 className={styles.amount}>
          {getTransactionSign(type)}
          <CurrencyAnimation end={amount} />
        </h1>
        <p className={styles.id}>ID: #{id}</p>
        <Button
          variant="ghost"
          size="small"
          className={styles.close}
          onClick={() => removeTransactionId(transactionId)}
        >
          <XIcon />
        </Button>
      </div>
      <div className={styles.body}>
        <div className={styles.informations}>
          {type === 'Received' ? (
            <>
              <TransactionInformations
                image={senderImage}
                name={senderName}
                identificator="From"
                date={mediumDateFormatter(date.toString())}
              />
              <TransactionInformations
                image={receiverImage}
                name={receiverName}
                identificator="To"
                purpose={purpose}
                creditcard={`${creditCard.name} ending in ${creditCard.numbers
                  .toString()
                  .slice(-4)}`}
                date={mediumDateFormatter(date.toString())}
              />
            </>
          ) : (
            <>
              <TransactionInformations
                image={senderImage}
                name={senderName}
                identificator="From"
                purpose={purpose}
                creditcard={`${creditCard.name} ending in ${creditCard.numbers
                  .toString()
                  .slice(-4)}`}
                date={mediumDateFormatter(date.toString())}
              />
              <TransactionInformations
                image={receiverImage}
                name={receiverName}
                identificator="To"
                date={mediumDateFormatter(date.toString())}
              />
            </>
          )}
        </div>
        <div>
          <TextArea label="Message" value={message} readOnly />
        </div>
      </div>
    </article>
  )
}
