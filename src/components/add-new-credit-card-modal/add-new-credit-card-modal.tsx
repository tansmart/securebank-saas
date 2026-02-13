import { useState } from 'react'
import UserIcon from '../../icons/user-icon'
import Button from '../button/button'
import Input from '../input/input'
import styles from './add-new-credit-card-modal.module.css'
import { CreditCard } from '../../utils/types'
import CreditCardIcon from '../../icons/credit-card-icon'
import CalendarIcon from '../../icons/calendar-icon'
import StarsIcon from '../../icons/stars-icon'
import { IMAGE_PATH } from '../../utils/constants'
import ErrorMessage from '../error-message/error-message'
import {
  creditCardExpirationDateMask,
  creditCardNumbersMask,
  onlyLettersMask,
  onlyNumbersMask,
} from '../../utils/helpers/input-masks'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import displayToast from '../../utils/toast'
import { useUserInformations } from '../../utils/contexts/user-informations-context'

type AddNewCreditCardModalProps = {
  closeModal: () => void
}

export default function AddNewCreditCardModal({
  closeModal,
}: AddNewCreditCardModalProps) {
  const initialCreditCard: CreditCard = {
    id: 0,
    owner: 'James Williams',
    name: 'Visa',
    logo: `${IMAGE_PATH}visa.svg`,
    numbers: 0,
    expirationDate: new Date(),
    cvv: '',
    balance: [{ amount: Math.floor(Math.random() * 100001), time: new Date() }],
    expenses: [
      { amount: Math.floor(Math.random() * 100001), time: new Date() },
    ],
    isActive: true,
  }

  const initialFormFieldValues = {
    owner: '',
    numbers: '',
    expirationDate: '',
    cvv: '',
  }

  const [formFields, setFormFields] = useState(initialFormFieldValues)
  const [newCreditCard, setNewCreditCard] = useState(initialCreditCard)
  const [errorMessage, setErrorMessage] = useState('')
  const { addNewCreditCard } = useCreditCards()
  const { userInformations } = useUserInformations()

  const isButtonDisabled =
    !formFields.owner ||
    !formFields.numbers ||
    !formFields.expirationDate ||
    !formFields.cvv

  return (
    <article className={styles.modal}>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          if (newCreditCard.numbers.toString().length < 16) {
            setErrorMessage('Invalid card numbers. Please enter 16 digits.')
            return
          }

          if (newCreditCard.cvv.length < 3) {
            setErrorMessage('Invalid card CVV. CVV must be 3 digits')
            return
          }

          if (
            formFields.expirationDate.length <= 2 ||
            isNaN(newCreditCard.expirationDate.getTime())
          ) {
            setErrorMessage('Invalid expiration date. Use MM/YY format')
            return
          }

          if (newCreditCard.expirationDate.getTime() <= new Date().getTime()) {
            setErrorMessage('Invalid expiration date. Enter a future MM/YY.')
            return
          }

          addNewCreditCard(newCreditCard)
          displayToast('Credit Card Added Successfully!')
          setFormFields(initialFormFieldValues)
          setNewCreditCard(initialCreditCard)
          closeModal()
        }}
      >
        <div className={styles.head}>
          <h3>Add New Credit Card</h3>
        </div>
        <div className={styles.body}>
          <Input
            type="text"
            label="Cardholder Name"
            leftIcon={<UserIcon />}
            placeholder={`${userInformations.firstName} ${userInformations.lastName}`}
            value={formFields.owner || ''}
            onChange={(e) => {
              setFormFields({
                ...formFields,
                owner: onlyLettersMask(e.target.value),
              })
              setNewCreditCard({
                ...newCreditCard,
                owner: e.target.value,
              })
            }}
          />
          <Input
            type="tel"
            label="Card Numbers"
            leftIcon={<CreditCardIcon />}
            placeholder="1234 5678 9098 7654"
            min={0}
            maxLength={19}
            value={formFields.numbers || ''}
            onChange={(e) => {
              setFormFields({
                ...formFields,
                numbers: creditCardNumbersMask(e.target.value),
              })
              setNewCreditCard({
                ...newCreditCard,
                numbers: parseInt(e.target.value.split(' ').join('')),
                logo:
                  e.target.value.toString()[0] >= '5'
                    ? `${IMAGE_PATH}mastercard.svg`
                    : `${IMAGE_PATH}visa.svg`,
                name:
                  e.target.value.toString()[0] >= '5' ? 'Mastercard' : 'Visa',
              })
            }}
          />
          <div className={styles.inputs}>
            <Input
              type="tel"
              label="Expiration Date"
              leftIcon={<CalendarIcon />}
              placeholder="01/25"
              min={5}
              max={5}
              value={formFields.expirationDate || ''}
              onChange={(e) => {
                setFormFields({
                  ...formFields,
                  expirationDate: creditCardExpirationDateMask(e.target.value),
                })
                setNewCreditCard({
                  ...newCreditCard,
                  expirationDate: new Date(
                    e.target.value.split('/').join('/01/')
                  ),
                })
              }}
            />
            <Input
              type="tel"
              label="CVV"
              leftIcon={<StarsIcon />}
              placeholder="420"
              value={formFields.cvv || ''}
              min={0}
              maxLength={3}
              onChange={(e) => {
                setFormFields({
                  ...formFields,
                  cvv: onlyNumbersMask(e.target.value),
                })
                setNewCreditCard({
                  ...newCreditCard,
                  cvv: e.target.value,
                })
              }}
            />
          </div>
          {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
          <div className={styles.buttons}>
            <Button
              variant="secondary"
              size="large"
              className={styles.button}
              type="button"
              onClick={() => closeModal()}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="large"
              className={styles.button}
              type="submit"
              disabled={isButtonDisabled}
              onClick={() => setErrorMessage('')}
            >
              Add
            </Button>
          </div>
        </div>
      </form>
    </article>
  )
}
