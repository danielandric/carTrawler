export const SORT_FIELD_NAME = 'sortBy'

export enum SORT_BY {
  PRICE_ASC = 'price-asc',
  PRICE_DESC = 'price-desc',
}

export const SORT_BY_OPTIONS = [
  { value: SORT_BY.PRICE_ASC, label: 'Price: Low to High' },
  { value: SORT_BY.PRICE_DESC, label: 'Price: High to Low' },
]
