import { IMAGE_PATH } from '../../utils/constants'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import { useTheme } from '../../utils/contexts/theme-context'
import displayToast from '../../utils/toast'
import Button from '../button/button'
import styles from './delete-credit-card-modal.module.css'

type DeleteCreditCardModalProps = {
  closeModal: () => void
  creditCardIndex: number
  setCreditCardIndex?: React.Dispatch<React.SetStateAction<number>>
}

export default function DeleteCreditCardModal({
  closeModal,
  creditCardIndex,
  setCreditCardIndex,
}: DeleteCreditCardModalProps) {
  const { creditCards, removeCreditCard } = useCreditCards()
  const { isLightTheme } = useTheme()

  return (
    <article className={styles.modal}>
      <img
        src={`${IMAGE_PATH}${
          isLightTheme ? 'credit-cards-light.png' : 'credit-cards-dark.png'
        }`}
        alt=""
        className={styles.image}
      />
      <h3 className={styles.heading}>
        Are you sure you want to delete this credit card?
      </h3>
      <p className={styles.paragraph}>
        Removing your card will permanently erase all associated information and
        transactions.
      </p>
      <div className={styles.buttons}>
        <Button
          variant="secondary"
          size="large"
          className={styles.button}
          onClick={() => closeModal()}
        >
          Cancel
        </Button>
        <Button
          variant="danger"
          size="large"
          className={styles.button}
          onClick={() => {
            removeCreditCard(creditCardIndex)
            displayToast('Credit Card Removed')
            if (creditCardIndex === creditCards.length - 1) {
              setCreditCardIndex && setCreditCardIndex(creditCards.length - 2)
            }
            closeModal()
          }}
        >
          Delete
        </Button>
      </div>
    </article>
  )
}
