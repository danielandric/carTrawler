import type { JSX } from 'react'
import { Footer, Navbar } from '@/components/common'
import styles from './MainLayout.module.scss'
import { Outlet } from 'react-router'

const MainLayout = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
