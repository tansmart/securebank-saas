import styles from './tag.module.css'

type TagProps = React.ComponentPropsWithoutRef<'span'> & {
  children: React.ReactNode
}

export default function Tag({ children, className, ...props }: TagProps) {
  return (
    <span className={`${styles.tag} ${className}`} {...props}>
      {children}
    </span>
  )
}
