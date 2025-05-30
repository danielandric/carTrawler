import { type FC, useState, useMemo } from 'react'
import type { IVehAvail } from '@/types'
import mockData from '@/mockData/data.json'
import { CarRental } from '@components/rental/CarRental'
import type { ExtendedVehAvail, SortOption } from './types'
import './Dashboard.scss'

export const Dashboard: FC = () => {
  const [selectedCar, setSelectedCar] = useState<ExtendedVehAvail | null>(null)
  const [sortBy, setSortBy] = useState<SortOption>('price-asc')

  // Extract all cars from vendors into a flat array and sort them
  const sortedCars = useMemo(() => {
    const allCars = mockData[0].VehAvailRSCore.VehVendorAvails.flatMap(vendor =>
      vendor.VehAvails.map(car => ({
        ...car,
        vendorName: vendor.Vendor['@Name'],
        vendorCode: vendor.Vendor['@Code'],
      }))
    )

    return allCars.sort((a, b) => {
      const priceA = parseFloat(a.TotalCharge['@RateTotalAmount'])
      const priceB = parseFloat(b.TotalCharge['@RateTotalAmount'])
      const passengersA = parseInt(a.Vehicle['@PassengerQuantity'])
      const passengersB = parseInt(b.Vehicle['@PassengerQuantity'])

      switch (sortBy) {
        case 'price-desc':
          return priceB - priceA
        case 'passenger-asc':
          return passengersA - passengersB
        case 'passenger-desc':
          return passengersB - passengersA
        default: // price-asc
          return priceA - priceB
      }
    })
  }, [sortBy])

  const handleCarSelect = (car: IVehAvail) => {
    const extendedCar = sortedCars.find(
      sortedCar =>
        sortedCar.Vehicle['@Code'] === car.Vehicle['@Code'] &&
        sortedCar.TotalCharge['@RateTotalAmount'] === car.TotalCharge['@RateTotalAmount']
    )
    if (extendedCar) {
      setSelectedCar(extendedCar)
    }
  }

  const handleBackToList = () => {
    setSelectedCar(null)
  }

  const rentalInfo = mockData[0].VehAvailRSCore.VehRentalCore

  return (
    <div className='dashboard'>
      <div className='rental-legend'>
        <h1>Car Rental Options</h1>
        <div className='rental-details'>
          <div className='location-info'>
            <strong>Location:</strong> {rentalInfo.PickUpLocation['@Name']}
          </div>
          <div className='date-info'>
            <div>
              <strong>Pick-up:</strong>{' '}
              {new Date(rentalInfo['@PickUpDateTime']).toLocaleDateString()}
            </div>
            <div>
              <strong>Return:</strong>{' '}
              {new Date(rentalInfo['@ReturnDateTime']).toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className='sort-controls'>
          <label htmlFor='sort'>Sort by:</label>
          <select id='sort' value={sortBy} onChange={e => setSortBy(e.target.value as SortOption)}>
            <option value='price-asc'>Price: Low to High</option>
            <option value='price-desc'>Price: High to Low</option>
            <option value='passenger-asc'>Passengers: Low to High</option>
            <option value='passenger-desc'>Passengers: High to Low</option>
          </select>
        </div>
      </div>{' '}
      {selectedCar ? (
        <div className='car-detail'>
          <button className='back-button' onClick={handleBackToList}>
            Back to List
          </button>
          <div className='selected-car'>
            <CarRental
              data={{
                VehAvailRSCore: {
                  ...mockData[0].VehAvailRSCore,
                  VehVendorAvails: [
                    {
                      Vendor: {
                        '@Code': selectedCar.vendorCode,
                        '@Name': selectedCar.vendorName,
                      },
                      VehAvails: [selectedCar],
                    },
                  ],
                },
              }}
            />
          </div>
        </div>
      ) : (
        <div className='cars-grid'>
          <CarRental
            data={{
              VehAvailRSCore: {
                ...mockData[0].VehAvailRSCore,
                VehVendorAvails: sortedCars.map(car => ({
                  Vendor: {
                    '@Code': car.vendorCode,
                    '@Name': car.vendorName,
                  },
                  VehAvails: [car],
                })),
              },
            }}
            onSelectCar={handleCarSelect}
          />
        </div>
      )}
    </div>
  )
}
