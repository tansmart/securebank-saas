import styles from './section.module.css'

export default function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section className={`${styles.section} ${className}`}>{children}</section>
  )
}
