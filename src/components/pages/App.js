import React from 'react'
import Navigation from '../organisms/Navigation'
import Welcome from '../organisms/Welcome'
import About from '../organisms/About'
import HowWeWork from '../organisms/HowWeWork'
import VideoReel from '../organisms/VideoReel'
import Features from '../organisms/Features'

const App = () => (
  <>
    <Navigation />
    <main>
      <Welcome />
      <About />
      <HowWeWork />
      <VideoReel />
      <Features />
    </main>
  </>
)

export default App
