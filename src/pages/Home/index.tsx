import type { JSX } from 'react'
import { Typography, Button } from '@/components/common'
import { useNavigate } from 'react-router'
import { Routes } from '@/router/routes'
import styles from './Home.module.scss'
import partnerLogo from '@/assets/logo/partner.svg'

const Home = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <div className={styles['home-container']}>
      <div className={styles.content}>
        <img src={partnerLogo} alt='Car Trawler' className={styles.logo} />
        <Typography variant='title-xl' color='secondary'>
          Car Rental Made Easy
        </Typography>
        <Typography variant='subtitle-l' color='secondary'>
          Welcome to Car Trawler
        </Typography>
        <Typography variant='body-l' className={styles.description}>
          Find the perfect rental car for your next adventure. Compare prices from top brands like
          Avis, Hertz, and Alamo to get the best deals on your car rental.
        </Typography>
        <Button variant='primary' onClick={() => navigate(Routes.VEHICLES)}>
          Browse Available Cars
        </Button>
      </div>
    </div>
  )
}

export default Home
