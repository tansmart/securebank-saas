import styles from './table-body-cell-group.module.css'

type TableBodyCellGroupProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode
}

export default function TableBodyCellGroup({
  children,
  ...props
}: TableBodyCellGroupProps) {
  return (
    <div className={styles.group} {...props}>
      {children}
    </div>
  )
}
