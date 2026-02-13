import styles from './credit.card.status.module.css'

type CreditCardStatusProps = {
  isActive: boolean
}

export default function CreditCardStatus({ isActive }: CreditCardStatusProps) {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.circle} ${
          isActive ? styles.active : styles.inactive
        }`}
      ></div>
      <p className={styles.label}>{isActive ? 'Active' : 'Inactive'}</p>
    </div>
  )
}
