import { motion } from 'motion/react'
import { Feature } from '../../../utils/types'
import FeatureCell from '../feature-cell/feature-cell'
import styles from './feature-cell-list.module.css'

type FeatureCellListProps = {
  features: Feature[]
}

export default function FeatureCellList({ features }: FeatureCellListProps) {
  return (
    <ul className={styles.list}>
      {features.map(({ id, icon: Icon, title, description }) => (
        <motion.li
          key={id}
          initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * id }}
        >
          <FeatureCell
            icon={<Icon />}
            title={title}
            description={description}
          />
        </motion.li>
      ))}
    </ul>
  )
}
