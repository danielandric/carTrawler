import type { JSX } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { Button } from '@/components/common'
import { Routes } from '@/router/routes'
import styles from './Navbar.module.scss'
import partnerLogo from '@/assets/logo/partner.svg'
import angleLeftIcon from '@/assets/icons/angle-left.svg'

const Navbar = (): JSX.Element => {
  const navigate = useNavigate()
  const location = useLocation()
  const showBackButton = ![Routes.VEHICLES].includes(location.pathname as Routes)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img
          src={partnerLogo}
          alt='Car Trawler'
          className={styles.logo}
          onClick={() => navigate(Routes.HOME)}
        />
        {showBackButton && (
          <Button variant='secondary' onClick={() => navigate(-1)} iconLeft={angleLeftIcon}>
            Back
          </Button>
        )}
      </nav>
    </header>
  )
}

export default Navbar
