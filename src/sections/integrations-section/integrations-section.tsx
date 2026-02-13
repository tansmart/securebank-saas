import { useState } from 'react'
import Button from '../../components/button/button'
import IntegrationList from '../../components/integration-list/integration-list'
import { Integration } from '../../utils/types'
import Section from '../section/section'
import styles from './integrations-section.module.css'
import { useIntegrations } from '../../utils/contexts/integrations-context'
import displayToast from '../../utils/toast'

type IntegrationsSectionProps = {
  integrations: Integration[]
}

export default function IntegrationsSection({
  integrations,
}: IntegrationsSectionProps) {
  const { updateActiveIntegration } = useIntegrations()
  const [integrationIds, setIntegrationIds] = useState<number[]>([])

  function addNewIntegrationId(id: number) {
    setIntegrationIds(() => {
      if (integrationIds.includes(id)) {
        return integrationIds.filter((integrationId) => integrationId !== id)
      }
      return [...integrationIds, id]
    })
  }

  const isButtonDisabled = !integrationIds.length

  return (
    <Section>
      <h2>Connected Applications</h2>
      <div className={styles.integrationListWrapper}>
        <IntegrationList
          integrations={integrations}
          addNewIntegrationId={addNewIntegrationId}
        />
      </div>
      <Button
        variant="primary"
        size="large"
        onClick={() => {
          integrationIds.map((integrationId) =>
            updateActiveIntegration(integrationId)
          )
          displayToast(
            `Integration${
              integrationIds.length > 1 ? 's' : ''
            } Updated Successfully!`
          )
          setIntegrationIds([])
        }}
        disabled={isButtonDisabled}
      >
        Save Changes
      </Button>
    </Section>
  )
}
