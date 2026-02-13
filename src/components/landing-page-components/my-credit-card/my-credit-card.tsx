import { useState } from 'react'
import TrashIcon from '../../../icons/trash-icon'
import displayCreditCardExpDate from '../../../utils/helpers/display-credit-card-exp-date'
import { getEndingLastFourDigits } from '../../../utils/helpers/get-last-four-digits'
import { CreditCard } from '../../../utils/types'
import Button from '../../button/button'
import styles from './my-credit-card.module.css'
import XIcon from '../../../icons/x-icon'
import CheckIcon from '../../../icons/check-icon'

type MyCreditCardProps = {
  creditCard: CreditCard
  creditCards: CreditCard[]
  setCreditCards: React.Dispatch<React.SetStateAction<CreditCard[]>>
}

export default function MyCreditCard({
  creditCard: { id, logo, numbers, expirationDate, isActive },
  creditCards,
  setCreditCards,
}: MyCreditCardProps) {
  const [isCreditCardActive, setIsCreditCardActive] = useState(isActive)

  return (
    <article className={styles.card}>
      <div className={styles.informations}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="" className={styles.logo} />
        </div>
        <div>
          <p className={styles.numbers}>{getEndingLastFourDigits(numbers)}</p>
          <p className={styles.expirationDate}>
            {`Expiration date ${displayCreditCardExpDate(
              expirationDate.toString()
            )}`}
          </p>
        </div>
      </div>
      <ul className={styles.buttons}>
        <li>
          <Button
            variant="tertiary"
            size="small"
            leftIcon={<TrashIcon />}
            onClick={() =>
              setCreditCards((prevCreditCards) =>
                prevCreditCards.filter(
                  (prevCreditCard) => prevCreditCard.id !== id
                )
              )
            }
            disabled={creditCards.length === 1}
          >
            Remove
          </Button>
        </li>
        <li>
          <Button
            variant="tertiary"
            size="small"
            leftIcon={isCreditCardActive ? <XIcon /> : <CheckIcon />}
            onClick={() => setIsCreditCardActive((prev) => !prev)}
          >
            {isCreditCardActive ? 'Deactivate' : 'Activate'}
          </Button>
        </li>
      </ul>
    </article>
  )
}
