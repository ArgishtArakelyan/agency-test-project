import React from 'react'
import { Anchor, List } from '../../atoms'

const NavigationBlock = ({ children }) => (
  <div className="navigation">
    <nav>
      <ul>
        <List>
          <Anchor>About</Anchor>
        </List>
        <List>
          <Anchor>Services</Anchor>
        </List>
        <List>
          <Anchor>Pricing</Anchor>
        </List>
        <List>
          <Anchor>Blog</Anchor>
        </List>
      </ul>
    </nav>
  </div>
)

export default NavigationBlock
