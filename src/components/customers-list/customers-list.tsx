import { motion } from 'motion/react'
import { Customer } from '../../utils/types'
import CustomerCard from '../customer-card/customer-card'
import styles from './customers-list.module.css'

type CustomersListProps = {
  customers: Customer[]
}

export default function CustomersList({ customers }: CustomersListProps) {
  return (
    <ul className={styles.list}>
      {customers.map((customer) => (
        <motion.li
          key={customer.id}
          initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * customer.id }}
        >
          <CustomerCard customer={customer} />
        </motion.li>
      ))}
    </ul>
  )
}
