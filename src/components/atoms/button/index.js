import React from 'react'
import classnames from 'classnames'
import './style.scss'

export const ButtonType = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
}

export const ButtonTheme = {
  DEFAULT: 'default',
  ROUNDED: 'rounded',
}

export const ButtonSize = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
}

const Button = ({ type, onClick, children, theme, size, className, disabled }) => {
  const classProps = classnames('btn', className)

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} onClick={onClick} disabled={disabled} className={classProps}>
      {children}
    </button>
  )
}

export default Button
