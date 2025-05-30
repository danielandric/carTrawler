import type { IVehAvail, IVendor, IVehRentalCore } from '@/types'

export interface SortedVehicle extends IVehAvail {
  Vendor: IVendor
}

export interface UseVehicleDashboard {
  sortedVehicles: SortedVehicle[]
  vehRentalCore: IVehRentalCore
}
