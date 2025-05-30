import type { IVehAvail, IVendor } from '@/types'
import type { SORT_BY } from './constants'

export interface SortedVehicle extends IVehAvail {
  Vendor: IVendor
}

export interface UseVehicleList {
  sortedVehicles: SortedVehicle[]
  sortBy: `${SORT_BY}`
  handleSortByChange: (value: `${SORT_BY}`) => void
}
