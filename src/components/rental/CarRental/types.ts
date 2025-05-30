import type { ICarRentalResponse, IVehAvail } from '@/types'

export interface CarRentalProps {
  data: ICarRentalResponse
  onSelectCar?: (car: IVehAvail) => void
}
