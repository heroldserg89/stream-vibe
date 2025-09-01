import './Logo.scss'
import clsx from 'clsx'
import getPath from '@/utils/getPath'

export default (props) => {
  const { className, loading = 'lazy' } = props
  const title = 'Home'

  return (
    <a
      className={clsx(className, 'logo')}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src={getPath('/images/logo.svg')}
        alt="Logo"
        width={199}
        height={60}
        loading={loading}
      />
    </a>
  )
}
