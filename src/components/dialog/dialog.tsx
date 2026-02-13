import { motion } from 'motion/react'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import ReactFocusLock, { AutoFocusInside } from 'react-focus-lock'
import styles from './dialog.module.css'

type DialogProps = {
  children: React.ReactNode
  closeModal: () => void
}

export default function Dialog({ children, closeModal }: DialogProps) {
  function handleOnKeyDown(e: KeyboardEvent) {
    if (e.code === 'Escape') closeModal()
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleOnKeyDown)

    return () => {
      document.body.removeEventListener('keydown', handleOnKeyDown)
    }
  }, [])

  return createPortal(
    <motion.div
      id="backdrop"
      className={styles.backdrop}
      onClick={() => closeModal()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ReactFocusLock returnFocus className={styles.focusLock}>
        <AutoFocusInside className={styles.autoFocus}>
          <motion.div
            className={styles.dialog}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, transform: 'translateY(6rem)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            exit={{ opacity: 0, transform: 'translateY(6rem)' }}
          >
            {children}
          </motion.div>
        </AutoFocusInside>
      </ReactFocusLock>
    </motion.div>,
    document.getElementById('app-layout')!
  )
}
