import { motion } from 'motion/react'
import { Integration } from '../../../utils/types'
import IntegrationCard from '../integration-card/integration-card'
import styles from './integration-card-list.module.css'

type IntegrationCardListProps = {
  integrations: Integration[]
}

export default function IntegrationCardList({
  integrations,
}: IntegrationCardListProps) {
  return (
    <ul className={styles.list}>
      {integrations.map((integration) => (
        <motion.li
          key={integration.id}
          initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * integration.id }}
        >
          <IntegrationCard integration={integration} />
        </motion.li>
      ))}
    </ul>
  )
}
