import type { IVehAvail } from '@/types'

export interface VehicleCardProps {
  vehicle: IVehAvail
  onSelect?: (car: IVehAvail) => void
  isSelected?: boolean
}
