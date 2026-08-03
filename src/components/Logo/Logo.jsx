import './Logo.scss'
import clsx from 'clsx'
import getPath from '@/utils/getPath.js'

export default (props) => {
  const { className, loading = 'lazy' } = props

  const title = 'Home'

  return (
    <a
      className={clsx('logo', className)}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src={getPath('/images/logo.svg')}
        alt=""
        width={200}
        height={68}
        loading={loading}
      />
    </a>
  )
}
