import { IMAGE_PATH } from '../utils/constants'
import getGuideUrl from '../utils/helpers/get-guide-url'
import { Guide } from '../utils/types'

export const guides: Guide[] = [
  {
    id: 1,
    url: getGuideUrl('Mastering the Art of Sending Money with Confidence'),
    path: `/guides/${getGuideUrl(
      'Mastering the Art of Sending Money with Confidence'
    )}.md`,
    thumbnailUrl: `${IMAGE_PATH}sending-money.png`,
    title: 'Mastering the Art of Sending Money with Confidence',
  },
  {
    id: 2,
    url: getGuideUrl('Filtering Transactions Made Easy: A Quick Guide'),
    path: `/guides/${getGuideUrl(
      'Filtering Transactions Made Easy: A Quick Guide'
    )}.md`,
    thumbnailUrl: `${IMAGE_PATH}filtering-transactions.png`,
    title: 'Filtering Transactions Made Easy: A Quick Guide',
  },
  {
    id: 3,
    url: getGuideUrl('Simple Steps to Add Your Card for Easy Transactions'),
    path: `/guides/${getGuideUrl(
      'Simple Steps to Add Your Card for Easy Transactions'
    )}.md`,
    thumbnailUrl: `${IMAGE_PATH}adding-new-credit-card.png`,
    title: 'Simple Steps to Add Your Card for Easy Transactions',
  },
  {
    id: 4,
    url: getGuideUrl('Effortless Ways to Remove Your Card in Minutes'),
    path: `/guides/${getGuideUrl(
      'Effortless Ways to Remove Your Card in Minutes'
    )}.md`,
    thumbnailUrl: `${IMAGE_PATH}removing-credit-card.png`,
    title: 'Effortless Ways to Remove Your Card in Minutes',
  },
  {
    id: 5,
    url: getGuideUrl('Updating User Information: A Hassle-Free Approach'),
    path: `/guides/${getGuideUrl(
      'Updating User Information: A Hassle-Free Approach'
    )}.md`,
    thumbnailUrl: `${IMAGE_PATH}updating-user-information.png`,
    title: 'Updating User Information: A Hassle-Free Approach',
  },
  {
    id: 6,
    url: getGuideUrl('Activating and Deactivating Your Credit Card with Ease'),
    path: `/guides/${getGuideUrl(
      'Activating and Deactivating Your Credit Card with Ease'
    )}.md`,
    thumbnailUrl: `${IMAGE_PATH}managing-credit-cards.png`,
    title: 'Activating and Deactivating Your Credit Card with Ease',
  },
  {
    id: 7,
    url: getGuideUrl('Personalize Your Preferences for a Tailored Experience'),
    path: `/guides/${getGuideUrl(
      'Personalize Your Preferences for a Tailored Experience'
    )}.md`,
    thumbnailUrl: `${IMAGE_PATH}customizing-preferences.png`,
    title: 'Personalize Your Preferences for a Tailored Experience',
  },
  {
    id: 8,
    url: getGuideUrl('Turning Integrations On and Off: A Quick How-To'),
    path: `/guides/${getGuideUrl(
      'Turning Integrations On and Off: A Quick How-To'
    )}.md`,
    thumbnailUrl: `${IMAGE_PATH}managing-integrations.png`,
    title: 'Turning Integrations On and Off: A Quick How-To',
  },
]
