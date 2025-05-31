import type { JSX } from 'react'
import { Footer } from '@/components/common'
import styles from './MainLayout.module.scss'
import { Outlet } from 'react-router'

const MainLayout = (): JSX.Element => {
  return (
    <div className={styles.layout}>
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
