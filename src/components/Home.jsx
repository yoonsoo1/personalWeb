import React from 'react'
import Introduction from './Introduction'
import MoreMe from './MoreMe'
import Experiences from './Experiences'
import Projects from './Projects'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <Introduction />
        <MoreMe />
        <Experiences />
        <Projects />
        <Footer />
    </div>
  )
}

export default Home