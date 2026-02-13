import { Helmet } from 'react-helmet-async'
import FeaturesSection from '../../../sections/landing-page-sections/features-section/features-section'
import { TITLE_PREFIX } from '../../../utils/constants'

export default function FeaturesPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} Features</title>
      </Helmet>
      <FeaturesSection />
    </>
  )
}
