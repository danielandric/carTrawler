export interface SelectOption<T> {
  value: T
  label: string
}

export interface SelectProps<T extends string | number> {
  label?: string
  value: T
  options: SelectOption<T>[]
  handleChange: (event: React.ChangeEvent<HTMLSelectElement> & { target: { value: T } }) => void
  className?: string
}
