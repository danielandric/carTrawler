import type { JSX } from 'react'
import type { SelectProps } from './types'
import './Select.scss'

const Select = <T extends string | number>({
  label,
  value,
  options,
  handleChange,
}: SelectProps<T>): JSX.Element => {
  return (
    <div className='sort-controls'>
      <label htmlFor='sort'>{label}</label>
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
}

export default Select
