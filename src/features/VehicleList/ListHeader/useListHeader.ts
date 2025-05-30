import { useEffect, useState } from 'react'
import { SORT_BY, SORT_FIELD_NAME } from './constants'
import {
  getSearchParams,
  getUrlSearchParams,
  setUrlSearchParams,
  updateSearchParam,
} from '@/utils/browserAPI'
import type { UseListHeader } from './types'

const useListHeader = (): UseListHeader => {
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

  return { sortBy, handleSortByChange }
}

export default useListHeader
