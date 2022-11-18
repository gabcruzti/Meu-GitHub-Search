import { Header } from './components/Header'
import { Bio } from './components/Bio'
import { Search } from './components/Search'
import { Footer } from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <Header content="{ meu _ github _ search }" />
      <Bio
      title="Gabriela Cruz"
      subtitle="front-end developer"
      link="https://github.com/gabcruzti.png"/>
      <Search />
      <Footer />
    </div>
  )
}

export default App