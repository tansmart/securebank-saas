import { Helmet } from 'react-helmet-async'
import { TITLE_PREFIX } from '../../utils/constants'
import GuidesSection from '../../sections/guides-section/guides-section'

export default function GuidesPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} Guides</title>
      </Helmet>
      <GuidesSection />
    </>
  )
}
