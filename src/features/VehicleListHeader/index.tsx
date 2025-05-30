import { type JSX } from 'react'
import type { IVehRentalCore } from '@/types'
import mockData from '@/mockData/data.json'
import Typography from '@/components/common/Typography'
import './VehicleListHeader.scss'

const { PickUpLocation, ReturnLocation, PickUpDateTime, ReturnDateTime } = mockData[0]
  .VehAvailRSCore.VehRentalCore as IVehRentalCore

const VehicleListHeader = (): JSX.Element => (
  <div className='legend-container'>
    <Typography className='title' as='h1' variant='title-xl' color='secondary'>
      Legend
    </Typography>
    <div className='info-container'>
      <div className='location-info'>
        <img src='src/assets/icons/plane.svg' alt='Pickup' />
        <div>
          <Typography variant='body-m'>Pick-up Location:</Typography>
          <Typography variant='subtitle-s' color='secondary'>
            {PickUpLocation.Name}
          </Typography>
        </div>
      </div>

      <div className='location-info'>
        <img src='src/assets/icons/plane.svg' alt='Return' />
        <div>
          <Typography variant='body-m'>Return Location:</Typography>
          <Typography variant='subtitle-s' color='secondary'>
            {ReturnLocation.Name}
          </Typography>
        </div>
      </div>
    </div>

    <div className='info-container'>
      <div className='date-info'>
        <Typography variant='body-m'>Pick-up Date:</Typography>
        <Typography variant='subtitle-s' color='secondary'>
          {new Intl.DateTimeFormat('en-IE', {
            dateStyle: 'full',
            timeStyle: 'short',
          }).format(new Date(PickUpDateTime))}
        </Typography>
      </div>
      <div className='date-info'>
        <Typography variant='body-m'>Return Date:</Typography>
        <Typography variant='subtitle-s' color='secondary'>
          {new Intl.DateTimeFormat('en-IE', {
            dateStyle: 'full',
            timeStyle: 'short',
          }).format(new Date(ReturnDateTime))}
        </Typography>
      </div>
    </div>
  </div>
)

export default VehicleListHeader
