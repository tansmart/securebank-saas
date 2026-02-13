import { useState } from 'react'
import BentoCard from '../../bento-card/bento-card'
import { creditCards as staticCreditCards } from '../../../data/credit-cards'
import MyCreditCardsList from '../my-credit-cards-list/my-credit-cards-list'
import styles from './my-credit-cards-bento-card.module.css'

export default function MyCreditCardsBentoCard() {
  const [creditCards, setCreditCards] = useState(staticCreditCards.slice(0, 3))

  return (
    <BentoCard
      title="Streamlined Modern Cleanup Processes"
      description="Effortlessly remove any unwanted or unused cards from your account settings with ease"
    >
      <div className={styles.cards}>
        <header className={styles.header}>
          <h3>My Cards</h3>
        </header>
        <MyCreditCardsList
          creditCards={creditCards}
          setCreditCards={setCreditCards}
        />
      </div>
    </BentoCard>
  )
}
