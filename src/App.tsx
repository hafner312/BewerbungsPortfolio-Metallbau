import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { BackToTop } from './components/ui/BackToTop'
import { Hero } from './components/sections/Hero'
import { Stats } from './components/sections/Stats'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Timeline } from './components/sections/Timeline'
import { References } from './components/sections/References'
import { Learning } from './components/sections/Learning'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <References />
        <Learning />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
