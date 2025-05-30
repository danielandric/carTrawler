import type { JSX } from 'react'
import type { TypographyProps } from './types'
import React from 'react'

const Typography = ({ value, className, variant, as = 'p' }: TypographyProps): JSX.Element =>
  React.createElement(
    as,
    { className: `typography ${variant}${className ? ` ${className}` : ''}` },
    value
  )

export default Typography
