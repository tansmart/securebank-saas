import { Guide } from '../../utils/types'
import styles from './guide-card.module.css'
import { Link } from 'react-router-dom'
import { DASHBOARD_ROUTE } from '../../utils/constants'

type GuideCardProps = {
  url: Guide['url']
  title: Guide['title']
  thumbnailUrl: Guide['thumbnailUrl']
}

export default function GuideCard({
  url,
  thumbnailUrl,
  title,
}: GuideCardProps) {
  const guideUrl = `${DASHBOARD_ROUTE}guide/${url}`

  return (
    <Link to={guideUrl}>
      <article className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={thumbnailUrl} alt="" className={styles.image} />
        </div>
        <div className={styles.textGroup}>
          <h3 className={styles.heading}>{title}</h3>
        </div>
      </article>
    </Link>
  )
}
