import { IMAGE_PATH } from '../utils/constants'
import { Customer } from '../utils/types'

export const customers: Customer[] = [
  {
    id: 1,
    name: 'Radiyal',
    description:
      'Tailored eCommerce fulfillment solutions for enhanced customer experiences',
    logoUrl: `${IMAGE_PATH}radiyal-logo.svg`,
  },
  {
    id: 2,
    name: 'Stari',
    description:
      'Innovative software solutions that optimize business processes effectively',
    logoUrl: `${IMAGE_PATH}stari-logo.svg`,
  },
  {
    id: 3,
    name: 'Treva',
    description:
      'Personalized travel experiences with unique itineraries and services',
    logoUrl: `${IMAGE_PATH}treva-logo.svg`,
  },
  {
    id: 4,
    name: 'Velocity',
    description:
      'High-performance logistics and supply chain solutions for timely deliveries',
    logoUrl: `${IMAGE_PATH}velocity-logo.svg`,
  },
  {
    id: 5,
    name: 'ZooTV',
    description:
      'Engaging multimedia content specializing in entertainment and education',
    logoUrl: `${IMAGE_PATH}zootv-logo.svg`,
  },
  {
    id: 6,
    name: 'Liva',
    description:
      'Innovative electrical solutions focused on automation and safety systems',
    logoUrl: `${IMAGE_PATH}liva-logo.svg`,
  },
]
