import CalendarIcon from '../../icons/calendar-icon'
import CreditCardIcon from '../../icons/credit-card-icon'
import GiftIcon from '../../icons/gift-icon'
import { IMAGE_PATH } from '../../utils/constants'
import Tag from '../tag/tag'
import styles from './transaction-informations.module.css'

type TransactionInformationsProps = {
  image: string
  name: string
  date: string
  identificator: 'From' | 'To'
  purpose?: string
  creditcard?: string
}

export default function TransactionInformations({
  image,
  name,
  date,
  identificator,
  purpose,
  creditcard,
}: TransactionInformationsProps) {
  return (
    <div className={styles.informations}>
      <div>
        <img
          className={styles.image}
          src={image}
          alt=""
          onError={({ currentTarget }) => {
            currentTarget.onerror = null
            currentTarget.src = `${IMAGE_PATH}default-profile-picture.png`
          }}
        />
      </div>
      <div>
        <p>{identificator}</p>
        <h4 className={styles.name}>{name}</h4>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Tag>
              <CalendarIcon />
              <span>{date}</span>
            </Tag>
          </li>
          {creditcard && (
            <li className={styles.item}>
              <Tag>
                <CreditCardIcon />
                <span>{creditcard}</span>
              </Tag>
            </li>
          )}
          {purpose && (
            <li className={styles.item}>
              <Tag>
                <GiftIcon />
                <span>{purpose}</span>
              </Tag>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
