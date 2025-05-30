export const SORT_FIELD_NAME = 'sortBy'

export enum SORT_BY {
  PRICE_ASC = 'price-asc',
  PRICE_DESC = 'price-desc',
  PASSENGER_ASC = 'passenger-asc',
  PASSENGER_DESC = 'passenger-desc',
}

export const SORT_BY_OPTIONS = [
  { value: SORT_BY.PRICE_ASC, label: 'Price: Low to High' },
  { value: SORT_BY.PRICE_DESC, label: 'Price: High to Low' },
  { value: SORT_BY.PASSENGER_ASC, label: 'Passengers: Low to High' },
  { value: SORT_BY.PASSENGER_DESC, label: 'Passengers: High to Low' },
]
