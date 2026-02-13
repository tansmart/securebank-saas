import { useParams } from 'react-router-dom'
import getGuide from '../../utils/helpers/get-guide'
import NotFoundPage from '../not-found-page/not-found-page'
import { Helmet } from 'react-helmet-async'
import { TITLE_PREFIX } from '../../utils/constants'
import GuideSection from '../../sections/guide-section/guide-section'
import useFetchMarkdown from '../../hooks/use-fetch-markdown'

export default function GuidePage() {
  const { title } = useParams()
  const guide = getGuide(title)

  if (!guide) {
    return <NotFoundPage />
  }

  const markdown = useFetchMarkdown(guide.path)

  return (
    <>
      <Helmet>
        <title>
          {TITLE_PREFIX} {guide.title}
        </title>
      </Helmet>
      <GuideSection content={markdown} />
    </>
  )
}
