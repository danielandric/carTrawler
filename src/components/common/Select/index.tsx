import type { JSX } from 'react'
import type { SelectProps } from './types'
import styles from './Select.module.scss'
import { Typography } from '@/components/common'

const Select = <T extends string | number>({
  label = '',
  value,
  options,
  handleChange,
}: SelectProps<T>): JSX.Element => (
  <div className={styles['sort-controls']}>
    <Typography variant='body-l' as='label' htmlFor='sort'>
      {label}
    </Typography>
    <select
      id='sort'
      value={value}
      onChange={e =>
        handleChange(e as React.ChangeEvent<HTMLSelectElement> & { target: { value: T } })
      }
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
)

export default Select
