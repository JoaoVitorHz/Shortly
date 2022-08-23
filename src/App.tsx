import GlobalStyled from "./GlobalStyled"
import { Header } from "./Components/Header/Header"
import { Banner } from "./Components/Banner/Banner"
import { Input } from "./Components/Input/Input"
import { Statics } from "./Components/Statics/Statics"

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Banner />
      <Input />
      <Statics />
    </>
  )
}

export default App
