import Container from '../../../components/container/container'
import DemoDashboard from '../../../components/landing-page-components/demo-dashboard/demo-dashboard'
import HeroText from '../../../components/landing-page-components/hero-text/hero-text'
import styles from './hero-section.module.css'
import { motion } from 'motion/react'

export default function HeroSection() {
  return (
    <section className={styles.section}>
      <Container>
        <HeroText
          title="Transform Your Financial Life with Reply's Comprehensive Money Management Solution"
          description="Empower yourself with intuitive tools to track, manage, and optimize your finances for a secure future"
        />
      </Container>
      <motion.div
        initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ delay: 0.3 }}
        className={styles.dashboardWrapper}
      >
        <Container>
          <DemoDashboard />
        </Container>
      </motion.div>
    </section>
  )
}
