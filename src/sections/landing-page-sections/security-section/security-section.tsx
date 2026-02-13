import Container from '../../../components/container/container'
import FeatureCellList from '../../../components/landing-page-components/feature-cell-list/feature-cell-list'
import HeroText from '../../../components/landing-page-components/hero-text/hero-text'
import { securityFeatures } from '../../../data/features'
import styles from './security-section.module.css'

export default function SecuritySection() {
  return (
    <section className={styles.section}>
      <Container>
        <HeroText
          title="Your Peace of Mind is Our Priority, and that's Reliable Banking Security You Can Trust"
          description="Explore the robust security measures implemented to protect your data for a secure banking experience"
        />
        <div className={styles.featureListWrapper}>
          <FeatureCellList features={securityFeatures} />
        </div>
      </Container>
    </section>
  )
}
