import type { ElementType, JSX } from 'react'
import type { TypographyProps } from './types'
import React from 'react'
import './Typography.scss'

const Typography = <E extends ElementType = 'p'>({
  children,
  className,
  variant,
  as = 'p' as E,
  color = 'primary',
  ...props
}: TypographyProps<E>): JSX.Element => {
  const Component = as

  return React.createElement(
    Component,
    {
      ...props,
      className: `typography ${variant}${color ? ` typography-color-${color}` : ''}${className ? ` ${className}` : ''}`,
    },
    children
  )
}

export default Typography
