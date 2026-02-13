import styles from './feature-cell.module.css'

type FeatureCellProps = {
  icon: JSX.Element
  title: string
  description: string
}

export default function FeatureCell({
  icon: Icon,
  title,
  description,
}: FeatureCellProps) {
  return (
    <article>
      <header className={styles.header}>
        <div className={styles.iconWrapper}>{Icon}</div>
        <h4 className={styles.heading}>{title}</h4>
      </header>
      <p className={styles.paragraph}>{description}</p>
    </article>
  )
}
