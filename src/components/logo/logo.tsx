import LogoIcon from '../../icons/logo-icon'
import styles from './logo.module.css'

type LogoProps = {
  showText: boolean
}

export default function Logo({ showText }: LogoProps) {
  return (
    <div className={styles.logo}>
      <LogoIcon />
      {showText ? <span className={styles.text}>Reply</span> : null}
    </div>
  )
}
