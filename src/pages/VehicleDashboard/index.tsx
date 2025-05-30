import { type JSX } from 'react'
import './VehicleDashboard.scss'
import VehicleListHeader from '@/features/VehicleListHeader'
import VehicleList from '@/features/VehicleList'

const VehicleDashboard = (): JSX.Element => (
  <div className='dashboard'>
    <VehicleListHeader />
    <VehicleList />
  </div>
)

export default VehicleDashboard
