import { TouchEvent, useState } from 'react'

type SwipeProps = {
  onSwipeLeft: () => void
  onSwipeRight: () => void
}

export default function useSwipe({ onSwipeLeft, onSwipeRight }: SwipeProps) {
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const minSwipeDistance = 50

  function onTouchStart(e: TouchEvent) {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }

  function onTouchMove(e: TouchEvent) {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  function onTouchEnd() {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) onSwipeLeft()

    if (isRightSwipe) onSwipeRight()
  }

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  }
}
