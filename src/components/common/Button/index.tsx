import type { JSX } from 'react'
import type { ButtonProps } from './types'
import styles from './Button.module.scss'

const Button = ({
  children,
  variant = 'primary',
  iconLeft,
  iconRight,
  className,
  disabled = false,
  type = 'button',
  ...rest
}: ButtonProps): JSX.Element => {
  const combinedClassName = [styles.button, styles[variant], disabled && styles.disabled, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={combinedClassName} disabled={disabled} type={type} {...rest}>
      {iconLeft && <img src={iconLeft} alt='' className={styles['icon-left']} />}
      <span className={styles.content}>{children}</span>
      {iconRight && <img src={iconRight} alt='' className={styles['icon-right']} />}
    </button>
  )
}

export default Button
