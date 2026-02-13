import { guides } from '../../data/guides'

export default function getGuide(guideUrl: string | undefined) {
  return guides.find(({ url }) => url === guideUrl)
}
