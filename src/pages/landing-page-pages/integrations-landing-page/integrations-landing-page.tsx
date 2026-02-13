import { Helmet } from 'react-helmet-async'
import IntegrationsSection from '../../../sections/landing-page-sections/integrations-section/integrations-section'
import { TITLE_PREFIX } from '../../../utils/constants'

export default function IntegrationsPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} Integrations</title>
      </Helmet>
      <IntegrationsSection />
    </>
  )
}
