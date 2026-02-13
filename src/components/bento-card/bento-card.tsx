import styles from './bento-card.module.css'

type BentoCardProps = {
  children: React.ReactNode
  title: string
  description: string
}

export default function BentoCard({
  children,
  title,
  description,
}: BentoCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>{children}</div>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
}
