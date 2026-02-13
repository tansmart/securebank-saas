import AddNewCreditCardBentoCard from '../../../components/landing-page-components/add-new-credit-card-bento-card/add-new-credit-card-bento-card'
import FiltersBentoCard from '../../../components/landing-page-components/filters-bento-card/filters-bento-card'
import KeyboardShortcutsBentoCard from '../../../components/landing-page-components/keyboard-shortcuts-bento-card/keyboard-shortcuts-bento-card'
import LineChartBentoCard from '../../../components/landing-page-components/line-chart-bento-card/line-chart-bento-card'
import LandingPageSection from '../landing-page-section/landing-page-section'
import styles from './enhanced-user-experience-section.module.css'
import { motion } from 'motion/react'

const animationVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(-2rem)',
  },
  whileInView: { opacity: 1, transform: 'translateY(0)' },
}

export default function EnhancedUserExperienceSection() {
  return (
    <LandingPageSection
      heading="Superior User Experience Contributing to Advanced Customer Interaction"
      paragraph="Indulge in the ease and fluidity of navigating our system, while accessing potent and versatile operational tools and functions"
    >
      <div className={styles.bento}>
        <ul className={styles.row}>
          <motion.li
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className={styles.wide}
          >
            <KeyboardShortcutsBentoCard />
          </motion.li>
          <motion.li
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.1 * 1 }}
            className={styles.narrow}
          >
            <AddNewCreditCardBentoCard />
          </motion.li>
        </ul>
        <ul className={styles.row}>
          <motion.li
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.1 * 2 }}
            className={styles.narrow}
          >
            <LineChartBentoCard />
          </motion.li>
          <motion.li
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.1 * 3 }}
            className={styles.wide}
          >
            <FiltersBentoCard />
          </motion.li>
        </ul>
      </div>
    </LandingPageSection>
  )
}
