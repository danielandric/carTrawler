import { Select } from '@/components/common'
import { VehicleCard } from '@/components/VehicleCard'
import type { JSX } from 'react'
import useVehicleList from './useVehicleList'
import { SORT_BY_OPTIONS } from './constants'
import './VehicleList.scss'

const VehicleList = (): JSX.Element => {
  const { sortedVehicles, sortBy, handleSortByChange } = useVehicleList()

  return (
    <div>
      <Select
        label='Sort by:'
        value={sortBy}
        handleChange={e => handleSortByChange(e.target.value)}
        options={SORT_BY_OPTIONS}
      />

      <div className='vehicles-container'>
        {sortedVehicles.map(vehicle => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </div>
    </div>
  )
}

export default VehicleList
