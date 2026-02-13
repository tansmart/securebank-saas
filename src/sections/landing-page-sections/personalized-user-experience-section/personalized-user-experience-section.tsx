import { motion } from 'motion/react'
import ImageBentoCard from '../../../components/landing-page-components/image-bento-card/image-bento-card'
import LandingPageSection from '../landing-page-section/landing-page-section'
import styles from './personalized-user-experience-section.module.css'

const animationVariants = {
  initial: {
    opacity: 0,
    transform: 'translateY(-2rem)',
  },
  whileInView: { opacity: 1, transform: 'translateY(0)' },
}

export default function PersonalizedUserExperienceSection() {
  return (
    <LandingPageSection
      heading="Customized User Interface for Enhanced Personalization"
      paragraph="Elevate your experience with a personalized touch, as you tailor themes and charts to suit your individual taste"
    >
      <ul className={styles.bento}>
        <motion.li
          variants={animationVariants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className={styles.item}
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
          transition={{ delay: 0.1 * 1 }}
          className={styles.item}
        >
          <ImageBentoCard
            title="Explore Versatile Visual Flexibility Options"
            descripion="Easily analyze the evolution of your balance through personalized graphical charts"
            imagePrefix="chart"
            imageNames={['bar', 'line']}
          />
        </motion.li>
      </ul>
    </LandingPageSection>
  )
}
