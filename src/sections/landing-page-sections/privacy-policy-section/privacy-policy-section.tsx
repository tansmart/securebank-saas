import styles from './privacy-policy-section.module.css'
import Container from '../../../components/container/container'
import MarkdowContentLoader from '../../../components/markdown-content-loader/markdown-content-loader'

type PrivacyPolicySectionProps = {
  content: string
}

export default function PrivacyPolicySection({
  content,
}: PrivacyPolicySectionProps) {
  return (
    <section className={styles.section}>
      <Container>
        <MarkdowContentLoader content={content} />
      </Container>
    </section>
  )
}
