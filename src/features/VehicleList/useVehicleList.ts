import { useEffect, useMemo, useState } from 'react'
import _sortBy from 'lodash/sortBy'
import {
  getSearchParams,
  getUrlSearchParams,
  setUrlSearchParams,
  updateSearchParam,
} from '@/utils/browserAPI'
import { allVehicles, SORT_BY, SORT_FIELD_NAME } from '@/features/VehicleList/constants'
import type { UseVehicleList } from './types'

const useVehicleList = (): UseVehicleList => {
  const [sortBy, setSortBy] = useState<`${SORT_BY}`>(SORT_BY.PRICE_ASC)
  const sortByUrlParam = getUrlSearchParams(getSearchParams()).get(SORT_FIELD_NAME) as `${SORT_BY}`

  useEffect(() => {
    if (sortByUrlParam && Object.values(SORT_BY).includes(sortByUrlParam as SORT_BY))
      setSortBy(sortByUrlParam)
  }, [sortByUrlParam])

  const handleSortByChange = (value: `${SORT_BY}`) => {
    setSortBy(value)
    setUrlSearchParams(updateSearchParam(SORT_FIELD_NAME, value))
  }

  const currentSortBy =
    (getUrlSearchParams(getSearchParams()).get(SORT_FIELD_NAME) as `${SORT_BY}`) ||
    SORT_BY.PRICE_ASC

  const sortedVehicles = useMemo(() => {
    return _sortBy(allVehicles, vehicle => {
      const price = parseFloat(vehicle.TotalCharge.RateTotalAmount)

      switch (currentSortBy) {
        case SORT_BY.PRICE_DESC:
          return -price
        default:
          return price
      }
    })
  }, [currentSortBy])

  return { sortedVehicles, sortBy, handleSortByChange }
}

export default useVehicleList
