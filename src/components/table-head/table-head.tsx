import styles from './table-head.module.css'

type TableHeadProps = React.ComponentPropsWithoutRef<'thead'> & {
  children: React.ReactNode
}

export default function TableHead({ children, ...props }: TableHeadProps) {
  return (
    <thead className={styles.head} {...props}>
      {children}
    </thead>
  )
}
