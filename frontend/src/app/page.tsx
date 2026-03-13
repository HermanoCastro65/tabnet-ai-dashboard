import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import UploadCTA from '../components/UploadCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="py-24 bg-background animate-fadeIn">
        <Hero />
        <Features />
        <UploadCTA />
        <Footer />
      </section>
    </>
  )
}
