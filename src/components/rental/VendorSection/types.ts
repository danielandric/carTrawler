import type { IVehAvail, IVehVendorAvail } from '@/types'

export interface VendorSectionProps {
  vendorData: IVehVendorAvail
  onSelectCar?: (car: IVehAvail) => void
}
