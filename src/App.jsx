import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import "./App.css"
import background from "./images/background1.jpg"

function App() {

  const [lang, setLang] = useState("en")

  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
    </div>
  )
}

export default App