import type { FC } from 'react'
import { RentalSearch } from '@components/rental/RentalSearch'
import './CarRental.scss'
import { VendorSection } from '@components/rental/VendorSection'
import type { CarRentalProps } from './types'

export const CarRental: FC<CarRentalProps> = ({ data, onSelectCar }) => {
  const { VehAvailRSCore } = data

  return (
    <div className='car-rental'>
      <RentalSearch rentalCore={VehAvailRSCore.VehRentalCore} />

      <div className='vendors-container'>
        {VehAvailRSCore.VehVendorAvails.map(vendor => (
          <VendorSection
            key={vendor.Vendor['@Code']}
            vendorData={vendor}
            onSelectCar={onSelectCar}
          />
        ))}
      </div>
    </div>
  )
}
