import Container from '../../../components/container/container'
import styles from './landing-page-section.module.css'
import { motion } from 'motion/react'

type LandingPageSectionProps = {
  heading: string
  paragraph: string
  children: React.ReactNode
}

export default function LandingPageSection({
  heading,
  paragraph,
  children,
}: LandingPageSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <motion.h2
          initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          viewport={{ once: true }}
          className={styles.heading}
        >
          {heading}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, transform: 'translateY(-2rem)' }}
          whileInView={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className={styles.paragraph}
        >
          {paragraph}
        </motion.p>
        {children}
      </Container>
    </section>
  )
}
