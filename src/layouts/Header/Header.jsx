import './Header.scss'
import Logo from '@/components/Logo'
import getPath from '@/utils/getPath'
import clsx from 'clsx'
import Button from '@/components/Button'

export default (props) => {
  const { url } = props
  const menuList = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Movies & Shows',
      href: '/movies',
    },
    {
      label: 'Support',
      href: '/support',
    },
    {
      label: 'Subscriptions',
      href: '/subscriptions',
    },
  ]

  return (
    <header className="header">
      <div className="header__wrapper container">
        <Logo className="header__logo" loading="eager" />
        <nav className="header__nav">
          <ul className="header__menu">
            {menuList.map(({ label, href }, index) => (
              <li className="header__menu-item" key={index}>
                <a
                  className={clsx('header__menu-link', {
                    'header__menu-link--active': href === url,
                  })}
                  href={getPath(href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <Button
            className="header__button"
            label="Search"
            isLabelHidden
            iconName="search"
            mode="transparent"
          />
          <Button
            className="header__button"
            label="Notification"
            isLabelHidden
            iconName="notification"
            mode="transparent"
          />
        </div>
      </div>
    </header>
  )
}
