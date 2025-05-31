import type { ElementType, JSX } from 'react'
import type { TypographyProps } from './types'
import React from 'react'
import styles from './Typography.module.scss'

const Typography = <E extends ElementType = 'p'>({
  children,
  className,
  variant,
  as: Component = 'p' as E,
  color = 'primary',
  ...props
}: TypographyProps<E>): JSX.Element => {
  const combinedClassName = [
    styles.typography,
    styles[variant],
    color && styles[`typography-color-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return React.createElement(
    Component,
    {
      ...props,
      className: combinedClassName,
    },
    children
  )
}

export default Typography
