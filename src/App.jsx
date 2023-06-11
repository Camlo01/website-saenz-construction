import './App.css'
import Header from './sections/header/Header'
import MissionPromise from './sections/mission/MissionPromiseSection'
import Services from './sections/services/ServicesSection'
import Opinions from './sections/opinions/OpinionsSection'
import Benefits from './sections/benefits/BenefitsSection'

function App() {

  return (
    <>
      <Header />
      <Services />
      <MissionPromise />
      <Opinions />
      <Benefits />
    </>
  )
}

export default App
