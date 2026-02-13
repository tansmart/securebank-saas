import { useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'
import ArrowUpRightIcon from '../../icons/arrow-up-right-icon'
import SidebarLeftCollapseIcon from '../../icons/sidebar-left-collapse-icon'
import SidebarLeftExpandIcon from '../../icons/sidebar-left-expand-icon'
import { DASHBOARD_ROUTE } from '../../utils/constants'
import { useUserInformations } from '../../utils/contexts/user-informations-context'
import { dashboardRoutes } from '../../utils/routes'
import Button from '../button/button'
import Logo from '../logo/logo'
import NavigationLink from '../navigation-link/navigation-link'
import SendMoneyModalButton from '../send-money-modal-button/send-money-modal-button'
import styles from './sidebar.module.css'

export default function Sidebar() {
  const [isOpened, setIsOpened] = useState(false)
  const isBigScreen = useMediaQuery({ minWidth: 768 })
  const sidebarRef = useRef<HTMLElement>(null)
  const { userInformations } = useUserInformations()

  function handleOnClick(e: MouseEvent) {
    if (window.screen.width <= 768) {
      if (sidebarRef.current && !e.composedPath().includes(sidebarRef.current))
        setIsOpened(false)
    }
  }

  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.ctrlKey && e.code === 'KeyB') setIsOpened((prev) => !prev)
  }

  useEffect(() => {
    document.body.addEventListener('click', handleOnClick)
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('click', handleOnClick)
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [])

  useEffect(() => {
    setIsOpened(isBigScreen ? true : false)
  }, [isBigScreen])

  return (
    <aside
      ref={sidebarRef}
      className={`${styles.sidebar} ${isOpened ? styles.active : ''}`}
    >
      <div className={styles.content}>
        <div className={styles.head}>
          <Link to={DASHBOARD_ROUTE}>
            <Logo showText={isOpened} />
          </Link>
          <Button
            variant="ghost"
            size="small"
            onClick={() => setIsOpened((prev) => !prev)}
          >
            {isOpened ? <SidebarLeftCollapseIcon /> : <SidebarLeftExpandIcon />}
          </Button>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <SendMoneyModalButton
                variant="primary"
                size="small"
                leftIcon={<ArrowUpRightIcon />}
                className={styles.button}
              >
                Send Money
              </SendMoneyModalButton>
            </li>
            {dashboardRoutes
              .slice(0, -2)
              .map(({ id, href, name, icon: Icon }) => (
                <li key={id} className={styles.item}>
                  <NavigationLink
                    icon={Icon && <Icon />}
                    label={name}
                    to={`${DASHBOARD_ROUTE}${href}`}
                    className={styles.link}
                  />
                </li>
              ))}
          </ul>
          <ul className={styles.list}>
            {dashboardRoutes.slice(-2).map(({ id, href, name, icon: Icon }) => (
              <li key={id} className={styles.item}>
                <NavigationLink
                  icon={Icon && <Icon />}
                  label={name}
                  to={`${DASHBOARD_ROUTE}${href}`}
                  className={styles.link}
                />
              </li>
            ))}
            <li className={styles.userInformations}>
              <img
                src={userInformations.imageUrl}
                alt=""
                className={styles.userProfilePicture}
              />
              <p className={styles.username}>
                {userInformations.firstName} {userInformations.lastName}
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}
