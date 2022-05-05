import React from 'react'
import classnames from 'classnames'

const Span = ({ size, className, children }) => {
  const classProps = classnames(`text-${size}`, className)

  return <span className={classProps}>{children}</span>
}

export default Span
