import type { IVehAvail } from '@/types'

export type SortOption = 'price-asc' | 'price-desc' | 'passenger-asc' | 'passenger-desc'

export interface ExtendedVehAvail extends IVehAvail {
  vendorName: string
  vendorCode: string
}
