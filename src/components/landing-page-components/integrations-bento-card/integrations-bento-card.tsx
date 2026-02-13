import { integrations } from '../../../data/integrations'
import BentoCard from '../../bento-card/bento-card'
import IntegrationsCardList from '../integrations-card-list/integrations-card-list'
import styles from './integrations-bento-card.module.css'

export default function IntegrationsBentoCard() {
  return (
    <BentoCard
      title="Advanced Connectivity for Integration"
      description="Ensure a smooth and integrated user experience through seamless application integration"
    >
      <div className={styles.integrations}>
        <header className={styles.header}>
          <h3>Connected Applications</h3>
        </header>
        <IntegrationsCardList integrations={integrations.slice(0, 3)} />
      </div>
    </BentoCard>
  )
}
