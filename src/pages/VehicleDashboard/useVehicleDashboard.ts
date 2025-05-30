import { useMemo } from 'react'
import sortBy from 'lodash/sortBy'
import type { UseVehicleDashboard, SortedVehicle } from './types'
import { getSearchParams, getUrlSearchParams } from '@/utils/browserAPI'
import { SORT_BY, SORT_FIELD_NAME } from '@/features/VehicleList/ListHeader/constants'
import mockData from '@/mockData/data.json'

const useVehicleDashboard = (): UseVehicleDashboard => {
  const currentSortBy =
    (getUrlSearchParams(getSearchParams()).get(SORT_FIELD_NAME) as `${SORT_BY}`) ||
    SORT_BY.PRICE_ASC

  const sortedVehicles = useMemo(() => {
    const allVehicles: SortedVehicle[] = mockData[0].VehAvailRSCore.VehVendorAvails.flatMap(
      vehVendorAvails =>
        vehVendorAvails.VehAvails.map(vehAvail => ({
          ...vehAvail,
          Vendor: vehVendorAvails.Vendor,
        }))
    )

    return sortBy(allVehicles, vehicle => {
      const price = parseFloat(vehicle.TotalCharge.RateTotalAmount)
      const passengers = parseInt(vehicle.Vehicle.PassengerQuantity)
      switch (currentSortBy) {
        case SORT_BY.PRICE_DESC:
          return -price
        case SORT_BY.PASSENGER_ASC:
          return passengers
        case SORT_BY.PASSENGER_DESC:
          return -passengers
        default:
          return price
      }
    })
  }, [currentSortBy])

  const vehRentalCore = mockData[0].VehAvailRSCore.VehRentalCore

  return { sortedVehicles, vehRentalCore }
}

export default useVehicleDashboard
