import { motion } from 'motion/react'
import HeroText from '../../../components/landing-page-components/hero-text/hero-text'
import styles from './features-section.module.css'
import KeyboardShortcutsBentoCard from '../../../components/landing-page-components/keyboard-shortcuts-bento-card/keyboard-shortcuts-bento-card'
import AddNewCreditCardBentoCard from '../../../components/landing-page-components/add-new-credit-card-bento-card/add-new-credit-card-bento-card'
import LineChartBentoCard from '../../../components/landing-page-components/line-chart-bento-card/line-chart-bento-card'
import FiltersBentoCard from '../../../components/landing-page-components/filters-bento-card/filters-bento-card'
import SendMoneyBentoCard from '../../../components/landing-page-components/send-money-bento-card/send-money-bento-card'
import CreditCardsBentoCard from '../../../components/landing-page-components/credit-cards-bento-card/credit-cards-bento-card'
import IntegrationsBentoCard from '../../../components/landing-page-components/integrations-bento-card/integrations-bento-card'
import MyCreditCardsBentoCard from '../../../components/landing-page-components/my-credit-cards-bento-card/my-credit-cards-bento-card'
import ImageBentoCard from '../../../components/landing-page-components/image-bento-card/image-bento-card'
import Container from '../../../components/container/container'

const animationVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(-2rem)',
  },
  whileInView: { opacity: 1, transform: 'translateY(0)' },
}

export default function FeaturesSection() {
  return (
    <section className={styles.section}>
      <Container>
        <HeroText
          title="Unlock the Full Potential of Your Finances with Our Innovative Banking Solutions"
          description="Explore powerful features that simplify your financial journey and empower your decision-making"
        />
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
          <ul className={styles.row}>
            <motion.li
              variants={animationVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.1 * 4 }}
              className={styles.narrow}
            >
              <SendMoneyBentoCard />
            </motion.li>
            <motion.li
              variants={animationVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.1 * 5 }}
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
              transition={{ delay: 0.1 * 6 }}
              className={styles.half}
            >
              <IntegrationsBentoCard />
            </motion.li>
            <motion.li
              variants={animationVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.1 * 7 }}
              className={styles.half}
            >
              <MyCreditCardsBentoCard />
            </motion.li>
          </ul>
          <ul className={styles.row}>
            <motion.li
              variants={animationVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.1 * 8 }}
              className={styles.half}
            >
              <ImageBentoCard
                title="Themes Designed to Match Your Personality"
                descripion="Unlock a personalized experience by switching between themes that match your personality"
                imagePrefix="theme"
                imageNames={['light', 'dark']}
              />
            </motion.li>
            <motion.li
              variants={animationVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.1 * 9 }}
              className={styles.half}
            >
              <ImageBentoCard
                title="Explore Versatile Visual Flexibility Options"
                descripion="Easily analyze the evolution of your balance through personalized graphical charts"
                imagePrefix="chart"
                imageNames={['bar', 'line']}
              />
            </motion.li>
          </ul>
        </div>
      </Container>
    </section>
  )
}
