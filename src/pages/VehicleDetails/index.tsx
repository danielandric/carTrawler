import { type JSX } from 'react'
import { Typography, NotFound } from '@/components/common'
import styles from './VehicleDetails.module.scss'

import transmissionIcon from '@/assets/icons/transmission.svg'
import fuelIcon from '@/assets/icons/fuel.svg'
import personIcon from '@/assets/icons/person.svg'
import bagIcon from '@/assets/icons/bag.svg'
import doorIcon from '@/assets/icons/door.svg'
import snowflakeIcon from '@/assets/icons/snowflake.svg'
import useVehicleDetails from './useVehicleDetails'

const VehicleDetails = (): JSX.Element => {
  const { vendorLogo, vehicle } = useVehicleDetails()

  if (!vehicle) {
    return (
      <NotFound
        title='Vehicle Not Found'
        message="Sorry, we couldn't find the vehicle you're looking for."
        icon={transmissionIcon}
      />
    )
  }

  return (
    <>
      <div className={styles['hero-section']}>
        <div className={styles['hero-content']}>
          <div className={styles['title-section']}>
            <div className={styles['title-vendor']}>
              <Typography variant='title-xl' as='h1' color='secondary'>
                {vehicle.Vehicle.VehMakeModel.Name}
              </Typography>
            </div>
            <Typography className={styles.price} variant='title-l' color='secondary'>
              {new Intl.NumberFormat('en', {
                style: 'currency',
                currency: vehicle.TotalCharge.CurrencyCode,
              }).format(parseFloat(vehicle.TotalCharge.RateTotalAmount))}
            </Typography>
          </div>
        </div>
      </div>

      <div className={styles['details-content']}>
        <div className={styles['content-grid']}>
          <div className={styles['vehicle-image']}>
            <img src={vehicle.Vehicle.PictureURL} alt={vehicle.Vehicle.VehMakeModel.Name} />
          </div>

          <div className={styles['features-section']}>
            <div className={styles['features-header']}>
              <Typography
                variant='title-m'
                as='h2'
                color='secondary'
                className={styles['section-title']}
              >
                Vehicle Features
              </Typography>
              <img className={styles['vendor-logo']} src={vendorLogo} alt={vehicle.Vendor.Name} />
            </div>

            <div className={styles['features-grid']}>
              <div className={styles.feature}>
                <img src={transmissionIcon} alt='Transmission' />
                <div>
                  <Typography variant='body-m'>Transmission</Typography>
                  <Typography variant='subtitle-s' color='secondary'>
                    {vehicle.Vehicle.TransmissionType}
                  </Typography>
                </div>
              </div>
              <div className={styles.feature}>
                <img src={fuelIcon} alt='Fuel' />
                <div>
                  <Typography variant='body-m'>Fuel Type</Typography>
                  <Typography variant='subtitle-s' color='secondary'>
                    {vehicle.Vehicle.FuelType}
                  </Typography>
                </div>
              </div>
              <div className={styles.feature}>
                <img src={personIcon} alt='Passengers' />
                <div>
                  <Typography variant='body-m'>Passengers</Typography>
                  <Typography variant='subtitle-s' color='secondary'>
                    {vehicle.Vehicle.PassengerQuantity}
                  </Typography>
                </div>
              </div>
              <div className={styles.feature}>
                <img src={bagIcon} alt='Bags' />
                <div>
                  <Typography variant='body-m'>Bags</Typography>
                  <Typography variant='subtitle-s' color='secondary'>
                    {vehicle.Vehicle.BaggageQuantity}
                  </Typography>
                </div>
              </div>
              <div className={styles.feature}>
                <img src={doorIcon} alt='Doors' />
                <div>
                  <Typography variant='body-m'>Doors</Typography>
                  <Typography variant='subtitle-s' color='secondary'>
                    {vehicle.Vehicle.DoorCount}
                  </Typography>
                </div>
              </div>
              <div className={styles.feature}>
                <img src={transmissionIcon} alt='Drive Type' />
                <div>
                  <Typography variant='body-m'>Drive Type</Typography>
                  <Typography variant='subtitle-s' color='secondary'>
                    {vehicle.Vehicle.DriveType}
                  </Typography>
                </div>
              </div>
              {vehicle.Vehicle.AirConditionInd && (
                <div className={styles.feature}>
                  <img src={snowflakeIcon} alt='Air Conditioning' />
                  <div>
                    <Typography variant='body-m'>Air Conditioning</Typography>
                    <Typography variant='subtitle-s' color='secondary'>
                      Yes
                    </Typography>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VehicleDetails
