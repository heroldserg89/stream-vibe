import './Header.scss'
import Logo from '@/components/Logo'

export default () => {
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
      <div className="header__wraper container">
        <Logo className="header__logo" loading="eager" />
        <nav className="header__nav">
          <ul className="header__menu">
            {menuList.map(({ label, href }, index) => (
              <li className="header__menu-item" key={index}>
                <a className="header__menu-link" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
