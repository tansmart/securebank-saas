import { DASHBOARD_ROUTE, SETTINGS_ROUTE } from '../../utils/constants'
import { settingsRoutes } from '../../utils/routes'
import NavigationLink from '../navigation-link/navigation-link'
import styles from './settings-nav-bar.module.css'

export default function SettingsNavBar() {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {settingsRoutes.map(({ id, href, name }) => (
          <li key={id}>
            <NavigationLink
              label={name}
              to={`${DASHBOARD_ROUTE}${SETTINGS_ROUTE}${href}`}
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
