import styles from './credit-card-logo.module.css'

type CreditCardLogoProps = {
  logoUrl: string
  name: string
}

export default function CreditCardLogo({ logoUrl, name }: CreditCardLogoProps) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={logoUrl} alt={name} title={name} />
    </div>
  )
}
