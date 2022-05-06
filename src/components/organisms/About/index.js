import React from 'react'
import { CompanyBlock, InfoBlock, ProgressBlock } from '../../molecules/about'
import './style.scss'

const About = () => (
  <section className="about">
    <div className="innerWrap">
      <CompanyBlock />
      <InfoBlock />
      <ProgressBlock />
    </div>
  </section>
)

export default About
