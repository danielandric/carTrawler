import type { JSX } from 'react'
import type { VehicleCardProps } from './types'
import './VehicleCard.scss'
import Typography from '@/components/common/Typography'

export const VehicleCard = ({ vehicle }: VehicleCardProps): JSX.Element => {
  const { Vehicle, TotalCharge } = vehicle

  return (
    <div className='vehicle-card'>
      <div className='vehicle-image'>
        <img src={Vehicle.PictureURL} alt={Vehicle.VehMakeModel.Name} />
      </div>
      <div className='vehicle-details'>
        <Typography className='vehicle-title' variant='subtitle-m' as='h3' color='secondary'>
          {Vehicle.VehMakeModel.Name}
        </Typography>

        <div className='vehicle-features'>
          <div className='feature'>
            <img src='src/assets/icons/transmission.svg' alt='Transmission' />
            <Typography variant='body-s'>{Vehicle.TransmissionType}</Typography>
          </div>
          <div className='feature'>
            <img src='src/assets/icons/fuel.svg' alt='Fuel' />
            <Typography variant='body-s'>{Vehicle.FuelType}</Typography>
          </div>
          <div className='feature'>
            <img src='src/assets/icons/person.svg' alt='Passengers' />
            <Typography variant='body-s'>{Vehicle.PassengerQuantity} Passengers</Typography>
          </div>
          <div className='feature'>
            <img src='src/assets/icons/bag.svg' alt='Bags' />
            <Typography variant='body-s'>{Vehicle.BaggageQuantity} Bags</Typography>
          </div>
          <div className='feature'>
            <img src='src/assets/icons/transmission.svg' alt='Drive Type' />
            <Typography variant='body-s'>{Vehicle.DriveType}</Typography>
          </div>
          <div className='feature'>
            <img src='src/assets/icons/door.svg' alt='Doors' />
            <Typography variant='body-s'>{Vehicle.DoorCount} Doors</Typography>
          </div>
          {Vehicle.AirConditionInd && (
            <div className='feature'>
              <img src='src/assets/icons/snowflake.svg' alt='Fuel' />
              <Typography variant='body-s'>Air Conditioning</Typography>
            </div>
          )}
        </div>
      </div>

      <div className='vehicle-pricing'>
        <Typography className='vehicle-price' variant='subtitle-m' color='secondary'>
          {new Intl.NumberFormat('en', {
            style: 'currency',
            currency: TotalCharge.CurrencyCode,
          }).format(parseFloat(TotalCharge.RateTotalAmount))}
        </Typography>
        <img
          className='vendor-logo'
          src={`src/assets/vendors/${vehicle.Vendor.Name.toLowerCase()}.svg`}
          alt={vehicle.Vendor.Name}
        />
      </div>
    </div>
  )
}
