import { useState } from 'react'
import { Integration } from '../../utils/types'
import Switch from '../switch/switch'
import styles from './integration-card.module.css'

type IntegrationCardProps = Integration & {
  addNewIntegrationId: (id: number) => void
}

export default function IntegrationCard({
  id,
  name,
  description,
  logoUrl,
  isActive,
  addNewIntegrationId,
}: IntegrationCardProps) {
  const [isIntegrationActive, setIsIntegrationActive] = useState(isActive)

  return (
    <article className={styles.card}>
      <div className={styles.informations}>
        <div className={styles.logoWrapper}>
          <img src={logoUrl} alt="" />
        </div>
        <div>
          <p className={styles.title}>{name}</p>
          <span className={styles.description}>{description}</span>
        </div>
      </div>
      <Switch
        checked={isIntegrationActive}
        onChange={() => {
          addNewIntegrationId(id)
          setIsIntegrationActive(!isIntegrationActive)
        }}
      />
    </article>
  )
}
