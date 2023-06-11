import './App.css'
import Header from './sections/header/Header'
import MissionPromise from './sections/mission/MissionPromiseSection'
import Services from './sections/services/ServicesSection'
import Opinions from './sections/opinions/OpinionsSection'
import Benefits from './sections/benefits/BenefitsSection'
import About from './sections/about/AboutSection'

function App() {

  return (
    <>
      <Header />
      <Services />
      <MissionPromise />
      <Opinions />
      <Benefits />
      <About />
    </>
  )
}

export default App
