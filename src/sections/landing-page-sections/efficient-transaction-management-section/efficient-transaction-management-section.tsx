import { motion } from 'motion/react'
import CreditCardsBentoCard from '../../../components/landing-page-components/credit-cards-bento-card/credit-cards-bento-card'
import IntegrationsBentoCard from '../../../components/landing-page-components/integrations-bento-card/integrations-bento-card'
import MyCardsBentoCard from '../../../components/landing-page-components/my-credit-cards-bento-card/my-credit-cards-bento-card'
import SendMoneyBentoCard from '../../../components/landing-page-components/send-money-bento-card/send-money-bento-card'
import LandingPageSection from '../landing-page-section/landing-page-section'
import styles from './efficient-transaction-management-section.module.css'

const animationVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(-2rem)',
  },
  whileInView: { opacity: 1, transform: 'translateY(0)' },
}

export default function EfficientTransactionManagementSection() {
  return (
    <LandingPageSection
      heading="Optimize Your Transactions with Our Efficient and Time-Saving Tools"
      paragraph="Save Time and Effort with Our User-Friendly Platform for Simplified Money Transfers and Efficient Card Management"
    >
      <div className={styles.bento}>
        <ul className={styles.row}>
          <motion.li
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className={styles.narrow}
          >
            <SendMoneyBentoCard />
          </motion.li>
          <motion.li
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.1 * 1 }}
            className={styles.wide}
          >
            <CreditCardsBentoCard />
          </motion.li>
        </ul>
        <ul className={styles.row}>
          <motion.li
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.1 * 2 }}
            className={styles.half}
          >
            <IntegrationsBentoCard />
          </motion.li>
          <motion.li
            variants={animationVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.1 * 3 }}
            className={styles.half}
          >
            <MyCardsBentoCard />
          </motion.li>
        </ul>
      </div>
    </LandingPageSection>
  )
}
