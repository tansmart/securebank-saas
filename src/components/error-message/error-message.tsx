import styles from './error-message.module.css'

type ErrorMessageProps = {
  errorMessage: string
}

export default function ErrorMessage({ errorMessage }: ErrorMessageProps) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.message}>{errorMessage}</p>
    </div>
  )
}
