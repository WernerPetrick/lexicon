import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import InventoryManagementSection from "./components/InventoryManagementSection"
import NewsLetterCTA from "./components/NewsLetterCTA"

function Index(){
  return(
    <>
      <Header />
      <Hero />
      <InventoryManagementSection />
      <NewsLetterCTA />
      <Footer />
    </>
  )
}

export default Index