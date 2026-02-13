import { useState } from 'react'
import CashIcon from '../../icons/cash-icon'
import GiftIcon from '../../icons/gift-icon'
import UserIcon from '../../icons/user-icon'
import { Purpose, Transaction } from '../../utils/types'
import Button from '../button/button'
import Input from '../input/input'
import TextArea from '../text-area/text-area'
import styles from './send-money-modal.module.css'
import { IMAGE_PATH } from '../../utils/constants'
import { useTransactions } from '../../utils/contexts/transactions-context'
import { Select, Option } from '../select-option/select-option'
import CreditCardPayIcon from '../../icons/credit-card-pay-icon'
import { getEndingLastFourDigits } from '../../utils/helpers/get-last-four-digits'
import { purposes } from '../../data/purposes'
import { useCreditCards } from '../../utils/contexts/credit-cards-context'
import ErrorMessage from '../error-message/error-message'
import { currencyMask, onlyLettersMask } from '../../utils/helpers/input-masks'
import displayToast from '../../utils/toast'
import { useUserInformations } from '../../utils/contexts/user-informations-context'

type SendMoneyModalProps = {
  closeModal: () => void
}

export default function SendMoneyModal({ closeModal }: SendMoneyModalProps) {
  const { userInformations } = useUserInformations()
  const {
    activeCreditCards,
    getCreditCardById,
    getCreditCardByIndex,
    getCreditCardBalance,
    updateBalanceAndExpenses,
  } = useCreditCards()

  const initialTransaction: Transaction = {
    id: 0,
    senderName: `${userInformations.firstName} ${userInformations.lastName}`,
    senderImage: userInformations.imageUrl,
    receiverImage: '',
    receiverName: '',
    amount: 0,
    purpose: 'Bills',
    type: 'Sent',
    message: '',
    date: new Date(),
    creditCard: getCreditCardByIndex(0),
  }

  const initialFormFieldValues = {
    receiverName: '',
    creditCard: '',
    amount: '',
    purpose: '',
    message: '',
  }

  const [newTransaction, setNewTransaction] = useState(initialTransaction)
  const [formFields, setFormFields] = useState(initialFormFieldValues)
  const [errorMessage, setErrorMessage] = useState('')
  const { addNewTransaction } = useTransactions()

  const isButtonDisabled =
    !formFields.receiverName ||
    !formFields.creditCard ||
    !formFields.amount ||
    !formFields.purpose

  return (
    <article className={styles.modal}>
      <form
        onSubmit={(e) => {
          e.preventDefault()

          if (newTransaction.amount <= 0) {
            setErrorMessage('Error: Transfer amount must be greater than $0')
            return
          }

          if (
            newTransaction.amount >
            getCreditCardBalance(newTransaction.creditCard)
          ) {
            setErrorMessage("Error: You don't have enough money for transfer")
            return
          }

          updateBalanceAndExpenses(
            newTransaction.creditCard,
            newTransaction.amount,
            newTransaction.date
          )
          addNewTransaction(newTransaction)
          displayToast('Transfer Successful!')
          setNewTransaction(initialTransaction)
          setFormFields(initialFormFieldValues)
          closeModal()
        }}
      >
        <div className={styles.head}>
          <h3>Send Money</h3>
        </div>
        <div className={styles.body}>
          <Input
            type="text"
            label="Send To"
            leftIcon={<UserIcon />}
            placeholder="Liam Smith"
            value={formFields.receiverName}
            onChange={(e) => {
              setFormFields({
                ...formFields,
                receiverName: onlyLettersMask(e.target.value),
              })
              setNewTransaction({
                ...newTransaction,
                receiverName: e.target.value,
                receiverImage: `${IMAGE_PATH}${e.target.value
                  .split(' ')
                  .join('-')
                  .toLowerCase()}.png`,
              })
            }}
          />
          <Select
            label="Credit Card"
            icon={<CreditCardPayIcon />}
            value={formFields.creditCard || ''}
            onChange={(e) => {
              setFormFields({
                ...formFields,
                creditCard: e.target.value,
              })
              setNewTransaction({
                ...newTransaction,
                creditCard: getCreditCardById(parseInt(e.target.value)),
              })
            }}
          >
            <Option label="Select a credit card" disabled value="" />
            {activeCreditCards.map(({ id, name, numbers }) => (
              <Option
                value={id.toString()}
                key={id}
                label={`${name} ${getEndingLastFourDigits(numbers, true)}`}
              />
            ))}
          </Select>
          <Input
            type="tel"
            label="Amount"
            leftIcon={<CashIcon />}
            placeholder="$420.69"
            value={formFields.amount || ''}
            min={0}
            onChange={(e) => {
              setFormFields({
                ...formFields,
                amount: currencyMask(e.target.value),
              })
              setNewTransaction({
                ...newTransaction,
                amount: parseFloat(e.target.value.replace(/[$,]/g, '')) || 0,
              })
            }}
          />
          <Select
            label="Purpose"
            icon={<GiftIcon />}
            value={formFields.purpose || ''}
            onChange={(e) => {
              setFormFields({
                ...formFields,
                purpose: e.target.value,
              })
              setNewTransaction({
                ...newTransaction,
                purpose: e.target.value as Purpose,
              })
            }}
          >
            <Option label="Select a purpose" disabled value="" />
            {purposes.map(({ id, purpose }) => (
              <Option key={id} label={purpose} value={purpose} />
            ))}
          </Select>
          <TextArea
            label="Message"
            placeholder="Hi Liam! IYKYK"
            optional
            value={formFields.message || ''}
            onChange={(e) => {
              setFormFields({ ...formFields, message: e.target.value })
              setNewTransaction({ ...newTransaction, message: e.target.value })
            }}
          />
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
              Send Money
            </Button>
          </div>
        </div>
      </form>
    </article>
  )
}
