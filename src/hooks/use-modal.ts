import { useState } from 'react'

export default function useModal() {
  const [isOpened, setIsOpened] = useState(false)

  function openModal() {
    setIsOpened((prev) => !prev)
  }

  function closeModal() {
    setIsOpened((prev) => !prev)
  }

  return { isOpened, openModal, closeModal }
}
