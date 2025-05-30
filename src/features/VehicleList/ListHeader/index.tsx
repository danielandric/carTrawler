import { type JSX } from 'react'
import type { IVehRentalCore } from '@/types'
import { Select } from '@/components/common'
import { SORT_BY_OPTIONS } from './constants'
import useListHeader from './useListHeader'
import './ListHeader.scss'

const ListHeader = ({
  PickUpLocation,
  ReturnLocation,
  PickUpDateTime,
  ReturnDateTime,
}: IVehRentalCore): JSX.Element => {
  const { sortBy, handleSortByChange } = useListHeader()

  return (
    <div className='legend-container'>
      <h1>Legend</h1>

      <div className='rental-search'>
        <div className='location-info'>
          <div className='pickup-location'>
            <img src='src/assets/icons/plane.svg' alt='Pickup' />
            <div>
              <label>Pick-up Location</label>
              <h3>{PickUpLocation.Name}</h3>
            </div>
          </div>

          <div className='return-location'>
            <img src='src/assets/icons/plane.svg' alt='Return' />
            <div>
              <label>Return Location</label>
              <h3>{ReturnLocation.Name}</h3>
            </div>
          </div>
        </div>

        <div className='date-info'>
          <div className='pickup-date'>
            <label>Pick-up Date</label>
            <div>{PickUpDateTime}</div>
          </div>

          <div className='return-date'>
            <label>Return Date</label>
            <div>{ReturnDateTime}</div>
          </div>
        </div>
      </div>

      <Select
        label='Sort by:'
        value={sortBy}
        handleChange={e => handleSortByChange(e.target.value)}
        options={SORT_BY_OPTIONS}
      />
    </div>
  )
}

export default ListHeader
