import React from 'react'
import classnames from 'classnames'

const Paragraph = ({ size, className, children }) => {
  const classProps = classnames(`text-${size}`, className)

  return <p className={classProps}>{children}</p>
}

export default Paragraph
