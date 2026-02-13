import { Integration } from '../../utils/types'
import IntegrationCard from '../integration-card/integration-card'
import styles from './integration-list.module.css'

export type IntegrationListProps = {
  integrations: Integration[]
  addNewIntegrationId: (id: number) => void
}

export default function IntegrationList({
  integrations,
  addNewIntegrationId,
}: IntegrationListProps) {
  return (
    <ul className={styles.list}>
      {integrations.map(({ id, name, description, logoUrl, isActive }) => (
        <li key={id}>
          <IntegrationCard
            id={id}
            name={name}
            description={description}
            logoUrl={logoUrl}
            isActive={isActive}
            addNewIntegrationId={addNewIntegrationId}
          />
        </li>
      ))}
    </ul>
  )
}
