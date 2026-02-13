import styles from './table-head-cell.module.css'

type TableHeadCellProps = React.ComponentPropsWithoutRef<'th'> & {
  children: React.ReactNode
}

export default function TableHeadCell({
  children,
  ...props
}: TableHeadCellProps) {
  return (
    <th className={styles.cell} {...props}>
      {children}
    </th>
  )
}
