import './Header.scss'
import Logo from '@/components/Logo'

export default () => {
  return (
    <header className="header">
      <div className="header__wraper container">
        <Logo className="header__logo" loading="eager" />
      </div>
    </header>
  )
}
