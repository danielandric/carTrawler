import type { JSX } from 'react'
import { NotFound } from '@/components/common'
import transmissionIcon from '@/assets/icons/transmission.svg'

const NotFoundPage = (): JSX.Element => (
  <NotFound
    title='Page Not Found'
    message="Sorry, the page you're looking for doesn't exist."
    icon={transmissionIcon}
  />
)

export default NotFoundPage
