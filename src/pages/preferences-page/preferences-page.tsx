import { Helmet } from 'react-helmet-async'
import PreferencesSection from '../../sections/preferences-section/preferences-section'
import { TITLE_PREFIX } from '../../utils/constants'

export default function PreferencesPage() {
  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} Preferences</title>
      </Helmet>
      <PreferencesSection />
    </>
  )
}
