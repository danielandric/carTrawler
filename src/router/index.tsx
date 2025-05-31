import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Routes as Roots } from './routes'
import { Loader } from '@/components/common'

const Home = lazy(() => import('@/pages/Home'))
const VehicleDashboard = lazy(() => import('@/pages/VehicleDashboard'))
const VehicleDetails = lazy(() => import('@/pages/VehicleDetails'))
const NotFoundPage = lazy(() => import('@/pages/NotFound'))
const MainLayout = lazy(() => import('@/layouts/MainLayout'))

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<Home />} path={Roots.HOME} />
        <Route element={<MainLayout />}>
          <Route element={<VehicleDashboard />} path={Roots.VEHICLES} />
          <Route element={<VehicleDetails />} path={Roots.VEHICLE_DETAILS} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default Router
