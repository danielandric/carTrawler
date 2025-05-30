import type { JSX } from 'react'
import type { RentalSearchProps } from './types'
import './RentalSearch.scss'

export const RentalSearch = ({ rentalCore, onSearch }: RentalSearchProps): JSX.Element => {
  return (
    <div className='rental-search'>
      <div className='location-info'>
        <div className='pickup-location'>
          <img src='src/assets/icons/plane.svg' alt='Pickup' />
          <div>
            <label>Pick-up Location</label>
            <h3>{rentalCore.PickUpLocation.Name}</h3>
          </div>
        </div>

        <div className='return-location'>
          <img src='src/assets/icons/plane.svg' alt='Return' />
          <div>
            <label>Return Location</label>
            <h3>{rentalCore.ReturnLocation.Name}</h3>
          </div>
        </div>
      </div>

      <div className='date-info'>
        <div className='pickup-date'>
          <label>Pick-up Date</label>{' '}
          <input
            type='datetime-local'
            defaultValue={rentalCore.PickUpDateTime}
            onChange={e => {
              onSearch?.({
                pickup: e.target.value,
                return: rentalCore.ReturnDateTime,
              })
            }}
          />
        </div>

        <div className='return-date'>
          <label>Return Date</label>
          <input
            type='datetime-local'
            defaultValue={rentalCore.ReturnDateTime}
            onChange={e => {
              onSearch?.({
                pickup: rentalCore.PickUpDateTime,
                return: e.target.value,
              })
            }}
          />
        </div>
      </div>
    </div>
  )
}
