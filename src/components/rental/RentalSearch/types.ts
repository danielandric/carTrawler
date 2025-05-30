import type { IVehRentalCore } from '@/types'

export interface RentalSearchProps {
  rentalCore: IVehRentalCore
  onSearch?: (dates: { pickup: string; return: string }) => void
}
