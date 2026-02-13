import { useState } from 'react'
import { IMAGE_PATH } from '../../../utils/constants'
import BentoCard from '../../bento-card/bento-card'
import styles from './image-bento-card.module.css'

type ImageBentoCardProps = {
  title: string
  descripion: string
  imagePrefix: string
  imageNames: string[]
}

export default function ImageBentoCard({
  title,
  descripion,
  imagePrefix,
  imageNames,
}: ImageBentoCardProps) {
  const [imageIndex, setImageIndex] = useState(0)

  return (
    <BentoCard title={title} description={descripion}>
      <button
        className={styles.button}
        onClick={() =>
          setImageIndex((prevImageIndex) =>
            prevImageIndex >= imageNames.length - 1
              ? (prevImageIndex = 0)
              : prevImageIndex + 1
          )
        }
      >
        <img
          className={styles.image}
          src={`${IMAGE_PATH}${imagePrefix}-${imageNames[imageIndex]}.svg`}
          alt=""
        />
      </button>
    </BentoCard>
  )
}
