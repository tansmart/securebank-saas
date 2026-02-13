import styles from './guide-section.module.css'
import Section from '../section/section'
import MarkdownContentLoader from '../../components/markdown-content-loader/markdown-content-loader'

type GuideSectionProps = {
  content: string
}

export default function GuideSection({ content }: GuideSectionProps) {
  return (
    <Section className={styles.section}>
      <MarkdownContentLoader content={content} />
    </Section>
  )
}
