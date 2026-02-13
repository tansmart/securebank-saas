import Container from '../../../components/container/container'
import MarkdowContentLoader from '../../../components/markdown-content-loader/markdown-content-loader'
import styles from './terms-of-service-section.module.css'

type TermsOfServiceSectionProps = {
  content: string
}

export default function TermsOfServiceSection({
  content,
}: TermsOfServiceSectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <MarkdowContentLoader content={content} />
      </Container>
    </section>
  )
}
