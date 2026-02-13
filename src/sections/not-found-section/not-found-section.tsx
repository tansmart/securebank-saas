import Button from '../../components/button/button'
import { DASHBOARD_ROUTE, IMAGE_PATH } from '../../utils/constants'
import { useTheme } from '../../utils/contexts/theme-context'
import styles from './not-found-section.module.css'

export default function NotFoundSection() {
  const { isLightTheme } = useTheme()
  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <img
          src={`${IMAGE_PATH}not-found-${isLightTheme ? 'light' : 'dark'}.png`}
          alt=""
          className={styles.images}
        />
        <h2 className={styles.heading}>Page not found</h2>
        <p className={styles.description}>
          Unfortunately, we couldn't find the page you were looking for.
        </p>
        <Button href={DASHBOARD_ROUTE} variant="primary" size="large">
          Back to My Wallet
        </Button>
      </section>
    </div>
  )
}
