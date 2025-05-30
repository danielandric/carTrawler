import type { IVehAvail, IVendor } from '@/types'

export interface VehicleCardProps {
  vehicle: IVehAvail
  onSelect?: (car: IVehAvail) => void
  isSelected?: boolean
  vendor: IVendor
}
