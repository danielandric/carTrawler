import type { SORT_BY } from './constants'

export interface UseListHeader {
  sortBy: `${SORT_BY}`
  handleSortByChange: (value: `${SORT_BY}`) => void
}
