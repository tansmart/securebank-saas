import { Helmet } from 'react-helmet-async'
import TermsOfServiceSection from '../../../sections/landing-page-sections/terms-of-service-section/terms-of-service-section'
import { TITLE_PREFIX } from '../../../utils/constants'
import useFetchMarkdown from '../../../hooks/use-fetch-markdown'

export default function TermsOfServicePage() {
  const markdown = useFetchMarkdown('/terms-of-service.md')

  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} Terms of Service</title>
      </Helmet>
      <TermsOfServiceSection content={markdown} />
    </>
  )
}
