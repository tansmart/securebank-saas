import Button, { ButtonProps } from '../button/button'
import Dialog from '../dialog/dialog'
import { AnimatePresence } from 'motion/react'

type ModalButtonProps = ButtonProps & {
  label: React.ReactNode
  isOpened: boolean
  openModal: () => void
  closeModal: () => void
}

export default function ModalButton({
  label,
  children,
  isOpened,
  openModal,
  closeModal,
  ...props
}: ModalButtonProps) {
  return (
    <>
      <Button onClick={() => openModal()} {...props}>
        {label}
      </Button>
      <AnimatePresence>
        {isOpened && <Dialog closeModal={closeModal}>{children}</Dialog>}
      </AnimatePresence>
    </>
  )
}
