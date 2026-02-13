import { useEffect, useRef, useState } from 'react'
import Button, { ButtonProps } from '../button/button'
import Dropdown from '../dropdown/dropdown'
import styles from './dropdown-button.module.css'
import { AnimatePresence } from 'motion/react'

type DropdownButtonProps = ButtonProps & {
  label: string
}

export default function DropdownButton({
  label,
  children,
  ...props
}: DropdownButtonProps) {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  function handleOnClick(e: MouseEvent) {
    if (wrapperRef.current && !e.composedPath().includes(wrapperRef.current))
      setIsDropdownOpened(false)
  }

  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') setIsDropdownOpened(false)
  }

  useEffect(() => {
    if (!isDropdownOpened) return
    document.body.addEventListener('click', handleOnClick)
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('click', handleOnClick)
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [isDropdownOpened])

  return (
    <div ref={wrapperRef}>
      <Button
        className={styles.button}
        onClick={() => setIsDropdownOpened((prev) => !prev)}
        {...props}
      >
        {label}
      </Button>
      <AnimatePresence>
        {isDropdownOpened && (
          <Dropdown className={styles.dropdown}>{children}</Dropdown>
        )}
      </AnimatePresence>
    </div>
  )
}
