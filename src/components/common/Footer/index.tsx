import type { JSX } from 'react'
import { Typography } from '@/components/common'
import styles from './Footer.module.scss'
import alamoLogo from '@/assets/vendors/alamo.svg'
import avisLogo from '@/assets/vendors/avis.svg'
import hertzLogo from '@/assets/vendors/hertz.svg'

const Footer = (): JSX.Element => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <Typography variant='body-m' className={styles['footer-text']}>
        © {new Date().getFullYear().toString()} Car Trawler. All rights reserved.
      </Typography>
      <div className={styles['vendor-logos']}>
        <img src={alamoLogo} alt='Alamo' />
        <img src={avisLogo} alt='Avis' />
        <img src={hertzLogo} alt='Hertz' />
      </div>
    </div>
  </footer>
)

export default Footer
