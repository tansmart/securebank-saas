import { CreditCard } from '../../utils/types'
import MyCard from '../my-card/my-card'
import styles from './my-cards-list.module.css'

type MyCardsListProps = {
  creditCards: CreditCard[]
  addNewUpdateStatusCardId: (id: number) => void
  addNewRemoveCardIndexAndId: (cardIndex: number, cardId: number) => void
}

export default function MyCardsList({
  creditCards,
  addNewUpdateStatusCardId,
  addNewRemoveCardIndexAndId,
}: MyCardsListProps) {
  return (
    <ul className={styles.list}>
      {creditCards.map((creditCard, index) => (
        <li key={index}>
          <MyCard
            creditCards={creditCards}
            creditCard={creditCard}
            cardIndex={index}
            addNewUpdateStatusCardId={addNewUpdateStatusCardId}
            addNewRemoveCardIndexAndId={addNewRemoveCardIndexAndId}
          />
        </li>
      ))}
    </ul>
  )
}
