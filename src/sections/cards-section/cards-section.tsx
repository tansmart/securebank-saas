import { useState } from 'react'
import Button from '../../components/button/button'
import MyCardsList from '../../components/my-cards-list/my-cards-list'
import PlusIcon from '../../icons/plus-icon'
import { CreditCard } from '../../utils/types'
import Section from '../section/section'
import styles from './cards.module.css'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import AddNewCreditCardModalButton from '../../components/add-new-credit-card-modal-button/add-new-credit-card-modal-button'
import displayToast from '../../utils/toast'

type CardsSectionProps = {
  creditCards: CreditCard[]
}

export default function CardsSection({ creditCards }: CardsSectionProps) {
  const { changeCreditCardStatus, removeCreditCardById } = useCreditCards()
  const [cardUpdateStatusIds, setCardUpdateStatusIds] = useState<number[]>([])
  const [removeCardIds, setRemoveCardIds] = useState<number[]>([])
  const [updatedCreditCards, setUpdatedCreditCards] = useState(creditCards)

  function addNewUpdateStatusCardId(id: number) {
    setCardUpdateStatusIds(() => {
      if (cardUpdateStatusIds.includes(id)) {
        return cardUpdateStatusIds.filter(
          (cardUpdateStatusId) => cardUpdateStatusId !== id
        )
      }
      return [...cardUpdateStatusIds, id]
    })
  }

  function addNewRemoveCardIndexAndId(cardIndex: number, cardId: number) {
    setUpdatedCreditCards(
      [...updatedCreditCards].filter((_, index) => index !== cardIndex)
    )

    setRemoveCardIds([...removeCardIds, cardId])
  }

  const isButtonDisabled =
    updatedCreditCards.length === creditCards.length &&
    !cardUpdateStatusIds.length

  return (
    <Section>
      <header className={styles.header}>
        <h2>My Cards</h2>
        <AddNewCreditCardModalButton
          variant="secondary"
          size="small"
          rightIcon={<PlusIcon />}
        >
          Add New
        </AddNewCreditCardModalButton>
      </header>
      <div className={styles.myCardsListWrapper}>
        <MyCardsList
          creditCards={updatedCreditCards}
          addNewUpdateStatusCardId={addNewUpdateStatusCardId}
          addNewRemoveCardIndexAndId={addNewRemoveCardIndexAndId}
        />
      </div>
      <Button
        variant="primary"
        size="large"
        onClick={() => {
          if (cardUpdateStatusIds.length > 0) {
            cardUpdateStatusIds.map((id) => {
              changeCreditCardStatus(id)
            })
            setCardUpdateStatusIds([])
          }
          if (removeCardIds.length > 0) {
            removeCardIds.map((id) => {
              removeCreditCardById(id)
            })
            setRemoveCardIds([])
          }
          displayToast(
            `Credit Card${
              cardUpdateStatusIds.length + removeCardIds.length > 1 ? 's' : ''
            } Updated Successfully!`
          )
        }}
        disabled={isButtonDisabled}
      >
        Save Changes
      </Button>
    </Section>
  )
}
