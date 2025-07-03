import Billing from './sections/Billing'
import Collab from './sections/Collab'
import Contact from './sections/Contact'
import Features from './sections/Features'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Process from './sections/Process'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Collab />
      <Process />
      <Features />
      <Billing />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
