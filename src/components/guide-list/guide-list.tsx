import { Guide } from '../../utils/types'
import GuideCard from '../guide-card/guide-card'
import styles from './guide-list.module.css'

type GuideListProps = {
  guides: Guide[]
}

export default function GuideList({ guides }: GuideListProps) {
  return (
    <ul className={styles.list}>
      {guides.map(({ id, url, thumbnailUrl, title }) => (
        <li key={id}>
          <GuideCard url={url} thumbnailUrl={thumbnailUrl} title={title} />
        </li>
      ))}
    </ul>
  )
}
