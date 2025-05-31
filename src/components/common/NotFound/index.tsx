import type { JSX } from 'react'
import type { NotFoundProps } from './types'
import { Typography, Button } from '@/components/common'
import styles from './NotFound.module.scss'
import { useNavigate } from 'react-router'
import { Routes } from '@/router/routes'

const NotFound = ({
  title = 'Not Found',
  message = "Sorry, we couldn't find what you're looking for.",
  icon,
  className,
  actionLabel = 'Back to Home',
}: NotFoundProps): JSX.Element => {
  const navigate = useNavigate()
  const combinedClassName = [styles['not-found'], className].filter(Boolean).join(' ')

  return (
    <div className={combinedClassName}>
      {icon && <img src={icon} alt='' className={styles.icon} />}
      <Typography variant='title-l' color='secondary'>
        {title}
      </Typography>
      <Typography variant='body-l'>{message}</Typography>
      <Button onClick={() => navigate(Routes.HOME)}>{actionLabel}</Button>
    </div>
  )
}

export default NotFound
