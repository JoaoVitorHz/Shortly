import GlobalStyled from "./GlobalStyled"
import { Header } from "./Components/Header/Header"
import { Banner } from "./Components/Banner/Banner"
import { Statics } from "./Components/Statics/Statics"
import { Boost } from "./Components/Boost/Boost"
import { Footer } from "./Components/Footer/Footer"

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Banner />
      <Statics />
      <Boost />
      <Footer />
    </>
  )
}

export default App
