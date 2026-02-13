import { motion } from 'motion/react'
import styles from './dropdown.module.css'

type DropdownProps = {
  children: React.ReactNode
  className?: string
}

export default function Dropdown({ children, className }: DropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(2rem)' }}
      animate={{ opacity: 1, transform: 'translateY(0)' }}
      exit={{ opacity: 0, transform: 'translateY(2rem)' }}
      transition={{ duration: 0.2 }}
      className={`${styles.dropdown} ${className}`}
    >
      {children}
    </motion.div>
  )
}
