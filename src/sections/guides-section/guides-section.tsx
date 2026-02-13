import Section from '../section/section'
import { guides } from '../../data/guides'
import GuideList from '../../components/guide-list/guide-list'
import styles from './guides-section.module.css'

export default function GuidesSection() {
  return (
    <Section className={styles.section}>
      <h2>Guides</h2>
      <GuideList guides={guides} />
    </Section>
  )
}
