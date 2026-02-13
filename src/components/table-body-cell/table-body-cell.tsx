import styles from './table-body-cell.module.css'

type TableBodyCellProps = React.ComponentPropsWithoutRef<'td'> & {
  children: React.ReactNode
}

export default function TableBodyCell({
  children,
  ...props
}: TableBodyCellProps) {
  return (
    <td className={styles.cell} {...props}>
      {children}
    </td>
  )
}
