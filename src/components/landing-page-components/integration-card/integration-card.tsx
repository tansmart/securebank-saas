import { useState } from 'react'
import { Integration } from '../../../utils/types'
import Switch from '../../switch/switch'
import styles from './integration-card.module.css'

type IntegrationCardProps = {
  integration: Integration
}

export default function IntegrationCard({
  integration: { name, description, logoUrl, isActive },
}: IntegrationCardProps) {
  const [isIntegrationActive, setIsIntegrationActive] = useState(isActive)

  return (
    <article className={styles.card}>
      <div className={styles.logoWrapper}>
        <img src={logoUrl} alt="" />
      </div>
      <div className={styles.head}>
        <h3 className={styles.name}>{name}</h3>
        <Switch
          checked={isIntegrationActive}
          onChange={() => setIsIntegrationActive((prev) => !prev)}
        />
      </div>
      <p>{description}</p>
    </article>
  )
}
