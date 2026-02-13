import styles from './preferences-card.module.css'

type PreferencesCardProps = {
  isActive: boolean
  label: string
  imageUrl: string
}

export default function PreferencesCard({
  isActive,
  label,
  imageUrl,
}: PreferencesCardProps) {
  return (
    <article>
      <div
        className={`${styles.imageWrapper} ${isActive ? styles.active : ''}`}
      >
        <img src={imageUrl} alt="" className={styles.image} />
      </div>
      <p className={styles.label}>{label}</p>
    </article>
  )
}
