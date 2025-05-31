import { type JSX } from 'react'
import styles from './VehicleDashboard.module.scss'
import VehicleListHeader from '@/features/VehicleListHeader'
import VehicleList from '@/features/VehicleList'

const VehicleDashboard = (): JSX.Element => (
  <div className={styles['dashboard']}>
    <VehicleListHeader />
    <VehicleList />
  </div>
)

export default VehicleDashboard
