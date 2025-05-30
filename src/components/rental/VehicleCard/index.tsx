import type { JSX } from 'react'
import type { VehicleCardProps } from './types'
import './VehicleCard.scss'

export const VehicleCard = ({ vehicle, onSelect, isSelected }: VehicleCardProps): JSX.Element => {
  const { Vehicle, TotalCharge } = vehicle

  return (
    <div
      className={`vehicle-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect?.(vehicle)}
    >
      <div className='vehicle-image'>
        <img src={Vehicle.PictureURL} alt={Vehicle.VehMakeModel.Name} />
      </div>
      <div className='vehicle-details'>
        <h3>{Vehicle.VehMakeModel.Name}</h3>

        <div className='vehicle-features'>
          <div className='feature'>
            <img src='src/assets/icons/person.svg' alt='Passengers' />
            <span>{Vehicle.PassengerQuantity} Passengers</span>
          </div>
          <div className='feature'>
            <img src='src/assets/icons/bag.svg' alt='Bags' />
            <span>{Vehicle.BaggageQuantity} Bags</span>
          </div>
          <div className='feature'>
            <img src='src/assets/icons/transmission.svg' alt='Transmission' />
            <span>{Vehicle.TransmissionType}</span>
          </div>
          <div className='feature'>
            <img src='src/assets/icons/fuel.svg' alt='Fuel' />
            <span>{Vehicle.DriveType}</span>
          </div>
          <div className='feature'>
            <img src='src/assets/icons/fuel.svg' alt='Fuel' />
            <span>{Vehicle.FuelType}</span>
          </div>
          <div className='feature'>
            <img src='src/assets/icons/snowflake.svg' alt='Fuel' />
            <span>{Vehicle.AirConditionInd}</span>
          </div>
          <div className='feature'>
            <img src='src/assets/icons/door.svg' alt='Doors' />
            <span>{Vehicle.DoorCount} Doors</span>
          </div>
        </div>
      </div>
      <div className='vehicle-price'>
        <span className='currency'>{TotalCharge.CurrencyCode}</span>
        <span className='amount'>{TotalCharge.RateTotalAmount}</span>
      </div>
    </div>
  )
}
