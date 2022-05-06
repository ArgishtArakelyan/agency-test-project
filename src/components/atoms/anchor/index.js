import React from 'react'

const Anchor = ({ href, children, className }) => (
  <a className={className} href={href}>
    {children}
  </a>
)

export default Anchor
