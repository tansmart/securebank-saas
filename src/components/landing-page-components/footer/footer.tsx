import { Link } from 'react-router-dom'
import Container from '../../container/container'
import Logo from '../../logo/logo'
import styles from './footer.module.css'
import Button from '../../button/button'
import BrandInstagramIcon from '../../../icons/brand-instagram-icon'
import BrandLinkedinIcon from '../../../icons/brand-linkedin-icon'
import BrandXIcon from '../../../icons/brand-x-icon'
import UwuModalButton from '../uwu-modal-button/uwu-modal-button'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.primaryContent}>
          <div className={styles.linkGroup}>
            <Link to="/">
              <Logo showText />
            </Link>
            <UwuModalButton variant="rainbow">uwu?</UwuModalButton>
          </div>
          <nav className={styles.navigation}>
            <ul className={styles.navigationLinks}>
              <p>Product</p>
              <li>
                <Link to="/features" className={styles.link}>
                  Features
                </Link>
              </li>
              <li>
                <Link to="/integrations" className={styles.link}>
                  Integrations
                </Link>
              </li>
            </ul>
            <ul className={styles.navigationLinks}>
              <p>Company</p>
              <li>
                <Link to="/customers" className={styles.link}>
                  Customers
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className={styles.link}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className={styles.link}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/security" className={styles.link}>
                  Security
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.secondaryContent}>
          <p>&copy; Copyright Reply {new Date().getFullYear()}</p>
          <ul className={styles.socialLinks}>
            <li>
              <Button href="/" variant="secondary" size="small">
                <BrandInstagramIcon />
              </Button>
            </li>
            <li>
              <Button href="/" variant="secondary" size="small">
                <BrandLinkedinIcon />
              </Button>
            </li>
            <li>
              <Button href="/" variant="secondary" size="small">
                <BrandXIcon />
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}
