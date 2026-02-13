import { Integration } from '../../../utils/types'
import IntegrationsCard from '../integrations-card/integrations-card'
import styles from './integrations-card-list.module.css'

type IntegrationsCardListProps = {
  integrations: Integration[]
}

export default function IntegrationsCardList({
  integrations,
}: IntegrationsCardListProps) {
  return (
    <ul>
      {integrations.map((integration) => (
        <li className={styles.item} key={integration.id}>
          <IntegrationsCard integration={integration} />
        </li>
      ))}
    </ul>
  )
}
