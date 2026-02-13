import CreditCard from '../../components/credit-card/credit-card'
import TrashIcon from '../../icons/trash-icon'
import { CreditCard as CreditCardType } from '../../utils/types'
import Section from '../section/section'
import styles from './my-cards-section.module.css'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import CreditCardPagination from '../../components/credit-cards-pagination/credit-cards-pagination'
import useSwipe from '../../hooks/use-swipe'
import AddNewCreditCardModalButton from '../../components/add-new-credit-card-modal-button/add-new-credit-card-modal-button'
import PlusIcon from '../../icons/plus-icon'
import DeleteCreditCardModalButton from '../../components/delete-credit-card-modal-button/delete-credit-card-modal-button'

type MyCardsSectionProps = {
  creditCard: CreditCardType
  creditCardIndex: number
  setPreviousCreditCardIndex: React.Dispatch<React.SetStateAction<number>>
  setCreditCardIndex: React.Dispatch<React.SetStateAction<number>>
}

export default function MyCardsSection({
  creditCard,
  creditCardIndex,
  setPreviousCreditCardIndex,
  setCreditCardIndex,
}: MyCardsSectionProps) {
  const { getSortedCreditCards } = useCreditCards()

  function decrementCreditCardIndex() {
    setPreviousCreditCardIndex(creditCardIndex)
    setCreditCardIndex((prevCreditCardIndex) =>
      prevCreditCardIndex <= 0
        ? (prevCreditCardIndex = getSortedCreditCards().length - 1)
        : prevCreditCardIndex - 1
    )
  }

  function incrementCreditCardIndex() {
    setPreviousCreditCardIndex(creditCardIndex)
    setCreditCardIndex((prevCreditCardIndex) =>
      prevCreditCardIndex >= getSortedCreditCards().length - 1
        ? (prevCreditCardIndex = 0)
        : prevCreditCardIndex + 1
    )
  }

  const swipeHandlers = useSwipe({
    onSwipeLeft: incrementCreditCardIndex,
    onSwipeRight: decrementCreditCardIndex,
  })

  return (
    <Section>
      <header className={styles.header}>
        <h2>My Cards</h2>
        <ul className={styles.buttons}>
          <li>
            <AddNewCreditCardModalButton
              variant="tertiary"
              size="small"
              rightIcon={<PlusIcon />}
            >
              Add New
            </AddNewCreditCardModalButton>
          </li>
          <li>
            <DeleteCreditCardModalButton
              variant="tertiary"
              size="small"
              rightIcon={<TrashIcon />}
              creditCardIndex={creditCardIndex}
              setCreditCardIndex={setCreditCardIndex}
              disabled={getSortedCreditCards().length === 1}
            >
              Remove
            </DeleteCreditCardModalButton>
          </li>
        </ul>
      </header>
      <div className={styles.creditCard} {...swipeHandlers}>
        <CreditCard creditCard={creditCard} />
      </div>
      <CreditCardPagination
        creditCards={getSortedCreditCards()}
        creditCardIndex={creditCardIndex}
        setPreviousCreditCardIndex={setPreviousCreditCardIndex}
        setCreditCardIndex={setCreditCardIndex}
      />
    </Section>
  )
}
