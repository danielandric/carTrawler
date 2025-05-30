import type { FC } from 'react'
import { VehicleCard } from '@components/rental/VehicleCard'
import type { VendorSectionProps } from './types'
import './VendorSection.scss'

export const VendorSection: FC<VendorSectionProps> = ({ vendorData, onSelectCar }) => {
  const { Vendor, VehAvails } = vendorData

  return (
    <section className='vendor-section'>
      <div className='vendor-header'>
        <img
          src={`src/assets/vendors/${Vendor['@Name'].toLowerCase()}.svg`}
          alt={Vendor['@Name']}
          className='vendor-logo'
        />
        <h2>{Vendor['@Name']}</h2>
      </div>

      <div className='vehicles-grid'>
        {VehAvails.map(vehAvail => (
          <VehicleCard
            key={`${vehAvail.Vehicle['@Code']}-${vehAvail.TotalCharge['@RateTotalAmount']}`}
            vehicle={vehAvail}
            onSelect={onSelectCar}
          />
        ))}
      </div>
    </section>
  )
}
