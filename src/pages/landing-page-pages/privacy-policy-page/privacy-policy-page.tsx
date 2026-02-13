import { Helmet } from 'react-helmet-async'
import PrivacyPolicySection from '../../../sections/landing-page-sections/privacy-policy-section/privacy-policy-section'
import { TITLE_PREFIX } from '../../../utils/constants'
import useFetchMarkdown from '../../../hooks/use-fetch-markdown'

export default function PrivacyPolicyPage() {
  const markdown = useFetchMarkdown('/privacy-policy.md')

  return (
    <>
      <Helmet>
        <title>{TITLE_PREFIX} Privacy Policy</title>
      </Helmet>
      <PrivacyPolicySection content={markdown} />
    </>
  )
}
