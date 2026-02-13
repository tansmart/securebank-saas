type TableBodyProps = React.ComponentPropsWithoutRef<'tbody'> & {
  children: React.ReactNode
}

export default function TableBody({ children, ...props }: TableBodyProps) {
  return <tbody {...props}>{children}</tbody>
}
