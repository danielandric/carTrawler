import { type JSX } from 'react'
import './VehicleDashboard.scss'
import ListHeader from '@/features/VehicleList/ListHeader'
import useVehicleDashboard from './useVehicleDashboard'
import { VehicleCard } from '@/components/VehicleCard'

const VehicleDashboard = (): JSX.Element => {
  const { sortedVehicles, vehRentalCore } = useVehicleDashboard()

  return (
    <div className='dashboard'>
      <ListHeader {...vehRentalCore} />
      <div className='cars-grid'>
        <div className='car-rental'>
          <div className='vendors-container'>
            {sortedVehicles.map(vehicle => (
              <VehicleCard vehicle={vehicle} vendor={vehicle.Vendor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VehicleDashboard
