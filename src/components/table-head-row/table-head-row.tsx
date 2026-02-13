type TableHeadRowProps = React.ComponentPropsWithoutRef<'tr'> & {
  children: React.ReactNode
}

export default function TableHeadRow({
  children,
  ...props
}: TableHeadRowProps) {
  return <tr {...props}>{children}</tr>
}
