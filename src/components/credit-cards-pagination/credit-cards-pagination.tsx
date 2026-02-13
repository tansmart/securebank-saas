import ChevronLeftIcon from '../../icons/chevron-left-icon'
import ChevronRightIcon from '../../icons/chevron-right-icon'
import { CreditCard } from '../../utils/types'
import styles from './credit-cards-pagination.module.css'

type CreditCardPaginationProps = {
  creditCards: CreditCard[]
  creditCardIndex: number
  setPreviousCreditCardIndex: React.Dispatch<React.SetStateAction<number>>
  setCreditCardIndex: React.Dispatch<React.SetStateAction<number>>
}

export default function CreditCardPagination({
  creditCards,
  creditCardIndex,
  setPreviousCreditCardIndex,
  setCreditCardIndex,
}: CreditCardPaginationProps) {
  function decrementCreditCardIndex() {
    setPreviousCreditCardIndex(creditCardIndex)
    setCreditCardIndex((prevCreditCardIndex) =>
      prevCreditCardIndex <= 0
        ? (prevCreditCardIndex = creditCards.length - 1)
        : prevCreditCardIndex - 1
    )
  }

  function incrementCreditCardIndex() {
    setPreviousCreditCardIndex(creditCardIndex)
    setCreditCardIndex((prevCreditCardIndex) =>
      prevCreditCardIndex >= creditCards.length - 1
        ? (prevCreditCardIndex = 0)
        : prevCreditCardIndex + 1
    )
  }

  return (
    <ul className={styles.pagination}>
      <li>
        <button
          className={styles.button}
          onClick={decrementCreditCardIndex}
          disabled={creditCards.length === 1}
        >
          <ChevronLeftIcon />
        </button>
      </li>
      <li>
        <ul className={styles.circles}>
          {creditCards.map((_, index) => (
            <li className={styles.item} key={index}>
              <button
                onClick={() => {
                  setPreviousCreditCardIndex(creditCardIndex)
                  setCreditCardIndex(index)
                }}
                className={`${styles.circle} ${
                  creditCardIndex === index ? styles.active : ''
                }`}
              ></button>
            </li>
          ))}
        </ul>
      </li>
      <li>
        <button
          className={styles.button}
          onClick={incrementCreditCardIndex}
          disabled={creditCards.length === 1}
        >
          <ChevronRightIcon />
        </button>
      </li>
    </ul>
  )
}
