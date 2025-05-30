import type { IVehAvail, IVendor } from '@/types'

type Vehicle = IVehAvail & { Vendor: IVendor }

export interface VehicleCardProps {
  vehicle: Vehicle
}
