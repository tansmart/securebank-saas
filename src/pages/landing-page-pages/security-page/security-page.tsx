import { Helmet } from 'react-helmet-async'
import { TITLE_PREFIX } from '../../../utils/constants'
import SecuritySection from '../../../sections/landing-page-sections/security-section/security-section'

export default function SecurityPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} Security</title>
      </Helmet>
      <SecuritySection />
    </>
  )
}
