import { useState } from 'react'
import CreditCardIcon from '../../../icons/credit-card-icon'
import UserIcon from '../../../icons/user-icon'
import { useUserInformations } from '../../../utils/contexts/user-informations-context'
import BentoCard from '../../bento-card/bento-card'
import Input from '../../input/input'
import styles from './add-new-credit-card-bento-card.module.css'
import {
  creditCardNumbersMask,
  onlyLettersMask,
} from '../../../utils/helpers/input-masks'

export default function AddNewCreditCardBentoCard() {
  const { userInformations } = useUserInformations()
  const [formFields, setFormFields] = useState({ name: '', numbers: '' })

  return (
    <BentoCard
      title="Flawless System Integration Methods"
      description="Quickly and securely integrate new credit cards into your account today"
    >
      <form className={styles.form}>
        <header className={styles.header}>
          <h3>Add New Credit Card </h3>
        </header>
        <div>
          <div className={styles.inputWrapper}>
            <Input
              type="text"
              label="Cardholder Name"
              leftIcon={<UserIcon />}
              placeholder={`${userInformations.firstName} ${userInformations.lastName}`}
              value={formFields.name || ''}
              onChange={(e) => {
                setFormFields({
                  ...formFields,
                  name: onlyLettersMask(e.target.value),
                })
              }}
            />
          </div>
          <div className={styles.inputWrapper}>
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
              }}
            />
          </div>
        </div>
      </form>
    </BentoCard>
  )
}
