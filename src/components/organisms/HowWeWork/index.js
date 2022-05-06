import React from 'react'
import { HowWeWorkBlock, ListBlock } from '../../molecules/howwework'
import './style.scss'

const HowWeWork = () => (
  <section className="howWeWork">
    <div className="innerWrap">
      <HowWeWorkBlock />
      <ListBlock />
    </div>
  </section>
)

export default HowWeWork
