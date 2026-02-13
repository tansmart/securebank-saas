import { Outlet } from 'react-router-dom'
import SettingsNavBar from '../../components/settings-nav-bar/settings-nav-bar'
import styles from './settings-layout.module.css'

export default function SettingsLayout() {
  return (
    <>
      <div className={styles.layout}>
        <SettingsNavBar />
        <Outlet />
      </div>
    </>
  )
}
