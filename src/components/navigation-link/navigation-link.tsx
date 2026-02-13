import { NavLink, NavLinkProps } from 'react-router-dom'
import styles from './navigation-link.module.css'
type NavigationLinkProps = NavLinkProps & {
  label: string
  icon?: JSX.Element
}

export default function NavigationLink({
  label,
  icon: Icon,
  className,
  ...props
}: NavigationLinkProps) {
  return (
    <NavLink
      className={({ isActive }: { isActive: boolean }) => {
        return `${styles.link} ${isActive ? styles.active : ''} ${className}`
      }}
      title={label}
      end
      {...props}
    >
      {Icon}
      <span>{label}</span>
    </NavLink>
  )
}
