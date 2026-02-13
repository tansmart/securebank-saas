import { motion } from 'motion/react'
import styles from './hero-text.module.css'
import Button from '../../button/button'
import { DASHBOARD_ROUTE } from '../../../utils/constants'
import ChevronRightIcon from '../../../icons/chevron-right-icon'

type HeroTextProps = {
  title: string
  description: string
}

export default function HeroText({ title, description }: HeroTextProps) {
  return (
    <div className={styles.text}>
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
      >
        {title}
      </motion.h1>
      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ delay: 0.1 }}
      >
        {description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ delay: 0.2 }}
      >
        <Button
          href={DASHBOARD_ROUTE}
          variant="primary"
          size="large"
          rightIcon={<ChevronRightIcon />}
        >
          Get Started
        </Button>
      </motion.div>
    </div>
  )
}
