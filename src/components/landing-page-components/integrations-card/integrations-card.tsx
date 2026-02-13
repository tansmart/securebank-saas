import { useState } from 'react'
import { shortDateFormatter } from '../../../utils/helpers/date-formatters'
import { Integration } from '../../../utils/types'
import Switch from '../../switch/switch'
import styles from './integrations-card.module.css'

type IntegrationCardProps = {
  integration: Integration
}

export default function IntegrationsCard({
  integration: { logoUrl, name, isActive },
}: IntegrationCardProps) {
  const [isIntegrationActive, setIsIntegrationActive] = useState(isActive)

  return (
    <article className={styles.card}>
      <div className={styles.informations}>
        <div className={styles.logoWrapper}>
          <img src={logoUrl} alt="" className={styles.logo} />
        </div>
        <div className={styles.text}>
          <p className={styles.name}>{name}</p>
          <span className={styles.status}>
            {`${isActive ? 'Enabled' : 'Disabled'} ${shortDateFormatter(
              new Date().toString()
            )}`}
          </span>
        </div>
      </div>
      <Switch
        checked={isIntegrationActive}
        onChange={() => setIsIntegrationActive((prev) => !prev)}
      />
    </article>
  )
}
