import './Button.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const {
    className,
    href,
    type = 'button',
    target,
    /**
     * '' (default) | 'transparent'
     */
    mode = '',
    label,
    isLabelHidden = false,
    disabled = false,
    iconName = '',
    iconPosition = 'before',
  } = props
  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkProps = { href, target }
  const buttonProps = { type, disabled }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} />
  )

  return (
    <Component
      className={clsx(className, 'button', {[`button--${mode}`]:mode})}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      {iconPosition === 'before' && iconComponent}
      <span
        className={clsx(
          'button__label',
          !isLabelHidden ? '' : 'visually-hidden'
        )}
      >
        {label}
      </span>
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}
