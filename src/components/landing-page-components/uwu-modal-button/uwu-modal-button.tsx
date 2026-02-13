import useModal from '../../../hooks/use-modal'
import { ButtonProps } from '../../button/button'
import ModalButton from '../../modal-button/modal-button'
import UwuModal from '../uwu-modal/uwu-modal'

type UwuModalButtonProps = ButtonProps

export default function UwuModalButton({
  children,
  ...props
}: UwuModalButtonProps) {
  const { isOpened, openModal, closeModal } = useModal()

  return (
    <ModalButton
      label={children}
      isOpened={isOpened}
      openModal={openModal}
      closeModal={closeModal}
      {...props}
    >
      <UwuModal />
    </ModalButton>
  )
}
