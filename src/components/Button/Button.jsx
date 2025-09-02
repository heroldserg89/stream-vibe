import './Button.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    href,
    type = 'button',
    target,
    label,
    isLabelHidden = false,
    disabled = false,
  } = props
  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type, disabled }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined

  return (
    <Component
      className={clsx(className, 'button')}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      <span
        className={clsx(
          'button__label',
          !isLabelHidden ? '' : 'visually-hidden'
        )}
      >
        {label}
      </span>
    </Component>
  )
}
