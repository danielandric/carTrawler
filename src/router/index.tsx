import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Routes as Roots } from './routes'
import Loader from '@/components/Loader'

const VehicleDashboard = lazy(() => import('@/pages/VehicleDashboard'))
const VehicleDetails = lazy(() => import('@/pages/VehicleDetails'))

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<VehicleDashboard />} path={Roots.VEHICLES} />
        <Route element={<VehicleDetails />} path={Roots.VEHICLE_DETAILS} />
        <Route path='*' element={<div>Not found...</div>} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default Router
