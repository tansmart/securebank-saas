import { Type } from '../types'

export default function getTransactionSign(type: Type) {
  return type === 'Received' ? '+' : '-'
}
