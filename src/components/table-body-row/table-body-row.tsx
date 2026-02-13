import styles from './table-body-row.module.css'

type TableBodyRowProps = React.ComponentPropsWithoutRef<'tr'> & {
  children: React.ReactNode
  isActiveRow: boolean
}

export default function TableBodyRow({
  children,
  isActiveRow,
  ...props
}: TableBodyRowProps) {
  return (
    <tr
      className={`${styles.row} ${isActiveRow ? styles.active : null}`}
      {...props}
    >
      {children}
    </tr>
  )
}

