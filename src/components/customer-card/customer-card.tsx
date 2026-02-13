import { Customer } from '../../utils/types'
import styles from './customer-card.module.css'

type CustomerCardProps = {
  customer: Customer
}

export default function CustomerCard({
  customer: { name, description, logoUrl },
}: CustomerCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.logoWrapper}>
        <img src={logoUrl} alt="" />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}
