import type { IVehAvail, IVendor } from '@/types'
import type { SORT_BY } from './constants'

export interface Vehicle extends IVehAvail {
  Vendor: IVendor
  id: string
}

export interface UseVehicleList {
  sortedVehicles: Vehicle[]
  sortBy: `${SORT_BY}`
  handleSortByChange: (value: `${SORT_BY}`) => void
}
