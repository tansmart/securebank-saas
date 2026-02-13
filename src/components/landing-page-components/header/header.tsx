import { Link } from 'react-router-dom'
import Container from '../../container/container'
import Logo from '../../logo/logo'
import Button from '../../button/button'
import HamburgerIcon from '../../../icons/hamburger-icon'
import { DASHBOARD_ROUTE } from '../../../utils/constants'
import styles from './header.module.css'
import { landingPageNavigationLinks } from '../../../utils/routes'
import { useEffect, useState } from 'react'
import XIcon from '../../../icons/x-icon'
import { useMediaQuery } from 'react-responsive'

export default function Header() {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false)
  const isBigScreen = useMediaQuery({ minWidth: 768 })

  useEffect(() => {
    if (isBigScreen) setIsHamburgerOpened(false)
  }, [isBigScreen])

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <Link
            to="/"
            onClick={() =>
              isHamburgerOpened && setIsHamburgerOpened((prev) => !prev)
            }
          >
            <Logo showText />
          </Link>
          {!isBigScreen && (
            <Button
              variant="ghost"
              size="small"
              onClick={() => setIsHamburgerOpened((prev) => !prev)}
            >
              {isHamburgerOpened ? <XIcon /> : <HamburgerIcon />}
            </Button>
          )}
        </div>
        {(isHamburgerOpened || isBigScreen) && (
          <nav
            className={`${styles.navigation} ${
              isHamburgerOpened ? styles.active : ''
            }`}
          >
            <ul className={styles.list}>
              {landingPageNavigationLinks.map(({ id, href, name }) => (
                <li key={id} className={styles.item}>
                  <Link
                    className={styles.link}
                    to={href}
                    onClick={() =>
                      !isBigScreen && setIsHamburgerOpened((prev) => !prev)
                    }
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              href={DASHBOARD_ROUTE}
              variant="primary"
              size={isBigScreen ? 'small' : 'large'}
              className={styles.button}
            >
              Launch App
            </Button>
          </nav>
        )}
      </Container>
    </header>
  )
}
