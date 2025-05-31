import type { Vehicle } from '@/features/VehicleList/types'
import { Routes } from '@/router/routes'
import { useNavigate } from 'react-router'

const useVehicleCard = (vehicle: Vehicle) => {
  const navigate = useNavigate()

  const handleVehicleClick = () => navigate(Routes.VEHICLE_DETAILS.replace(':id', vehicle.id))

  return { handleVehicleClick }
}

export default useVehicleCard
