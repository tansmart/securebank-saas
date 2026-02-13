import Container from '../../../components/container/container'
import HeroText from '../../../components/landing-page-components/hero-text/hero-text'
import IntegrationCardList from '../../../components/landing-page-components/integration-card-list/integration-card-list'
import { integrations } from '../../../data/integrations'
import styles from './integrations-section.module.css'

export default function IntegrationsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <HeroText
          title="Seamlessly Connect Your Financial Tools with Our Integrations"
          description="Enhance your banking experience by integrating with your favorite apps and services effortlessly"
        />
        <div className={styles.integrationCardListWrapper}>
          <IntegrationCardList integrations={integrations} />
        </div>
      </Container>
    </section>
  )
}
