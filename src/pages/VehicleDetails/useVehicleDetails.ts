import { allVehicles } from '@/features/VehicleList/constants'
import { useParams } from 'react-router'

const useVehicleDetails = () => {
  const { id } = useParams<{ id: string }>()
  const vehicle = allVehicles.find(vehicle => vehicle.id === id)
  const vendorLogo = new URL(
    `/src/assets/vendors/${vehicle?.Vendor.Name.toLowerCase()}.svg`,
    import.meta.url
  ).href

  return { vendorLogo, vehicle }
}

export default useVehicleDetails
