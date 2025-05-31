import type { JSX } from 'react'
import type { VehicleCardProps } from './types'
import styles from './VehicleCard.module.scss'
import { Typography } from '@/components/common'
import useVehicleCard from './useVehicleCard'

import transmissionIcon from '@/assets/icons/transmission.svg'
import fuelIcon from '@/assets/icons/fuel.svg'
import personIcon from '@/assets/icons/person.svg'
import bagIcon from '@/assets/icons/bag.svg'
import doorIcon from '@/assets/icons/door.svg'
import snowflakeIcon from '@/assets/icons/snowflake.svg'

export const VehicleCard = ({ vehicle }: VehicleCardProps): JSX.Element => {
  const { Vehicle, TotalCharge, Vendor } = vehicle
  const { handleVehicleClick } = useVehicleCard(vehicle)
  const vendorLogo = `/src/assets/vendors/${Vendor.Name.toLowerCase()}.svg`

  return (
    <div className={styles['vehicle-card']} onClick={handleVehicleClick}>
      <div className={styles['vehicle-image']}>
        <img src={Vehicle.PictureURL} alt={Vehicle.VehMakeModel.Name} />
      </div>
      <div className={styles['vehicle-details']}>
        <Typography
          className={styles['vehicle-title']}
          variant='subtitle-m'
          as='h3'
          color='secondary'
        >
          {Vehicle.VehMakeModel.Name}
        </Typography>

        <div className={styles['vehicle-features']}>
          <div className={styles.feature}>
            <img src={transmissionIcon} alt='Transmission' />
            <Typography variant='body-s'>{Vehicle.TransmissionType}</Typography>
          </div>
          <div className={styles.feature}>
            <img src={fuelIcon} alt='Fuel' />
            <Typography variant='body-s'>{Vehicle.FuelType}</Typography>
          </div>
          <div className={styles.feature}>
            <img src={personIcon} alt='Passengers' />
            <Typography variant='body-s'>{Vehicle.PassengerQuantity} Passengers</Typography>
          </div>
          <div className={styles.feature}>
            <img src={bagIcon} alt='Bags' />
            <Typography variant='body-s'>{Vehicle.BaggageQuantity} Bags</Typography>
          </div>
          <div className={styles.feature}>
            <img src={transmissionIcon} alt='Drive Type' />
            <Typography variant='body-s'>{Vehicle.DriveType}</Typography>
          </div>
          <div className={styles.feature}>
            <img src={doorIcon} alt='Doors' />
            <Typography variant='body-s'>{Vehicle.DoorCount} Doors</Typography>
          </div>
          {Vehicle.AirConditionInd && (
            <div className={styles.feature}>
              <img src={snowflakeIcon} alt='Air Conditioning' />
              <Typography variant='body-s'>Air Conditioning</Typography>
            </div>
          )}
        </div>
      </div>

      <div className={styles['vehicle-pricing']}>
        <Typography className={styles['vehicle-price']} variant='subtitle-m' color='secondary'>
          {new Intl.NumberFormat('en', {
            style: 'currency',
            currency: TotalCharge.CurrencyCode,
          }).format(parseFloat(TotalCharge.RateTotalAmount))}
        </Typography>{' '}
        <img className={styles['vendor-logo']} src={vendorLogo} alt={Vendor.Name} />
      </div>
    </div>
  )
}
