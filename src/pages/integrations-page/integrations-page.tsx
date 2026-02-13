import { Helmet } from 'react-helmet-async'
import IntegrationsSection from '../../sections/integrations-section/integrations-section'
import { TITLE_PREFIX } from '../../utils/constants'
import { useIntegrations } from '../../utils/contexts/integrations-context'

export default function IntegrationsPage() {
  const { getSortedIntegrations } = useIntegrations()

  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} Integrations</title>
      </Helmet>
      <IntegrationsSection integrations={getSortedIntegrations()} />
    </>
  )
}
