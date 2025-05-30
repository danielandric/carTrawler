import type { JSX } from 'react'
import './Loader.scss'

const Loader = (): JSX.Element => (
  <div className='container'>
    <div className='loader' aria-label='Loading' />
  </div>
)

export default Loader
