import type { JSX } from 'react'
import styles from './Loader.module.scss'

const Loader = (): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.loader} aria-label='Loading' />
  </div>
)

export default Loader
