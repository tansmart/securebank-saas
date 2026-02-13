import { CreditCard } from '../../../utils/types'
import MyCreditCard from '../my-credit-card/my-credit-card'
import styles from './my-credit-cards-list.module.css'

type MyCreditCardsListProps = {
  creditCards: CreditCard[]
  setCreditCards: React.Dispatch<React.SetStateAction<CreditCard[]>>
}

export default function MyCreditCardsList({
  creditCards,
  setCreditCards,
}: MyCreditCardsListProps) {
  return (
    <ul>
      {creditCards.map((creditCard) => (
        <li className={styles.item} key={creditCard.id}>
          <MyCreditCard
            creditCard={creditCard}
            creditCards={creditCards}
            setCreditCards={setCreditCards}
          />
        </li>
      ))}
    </ul>
  )
}
