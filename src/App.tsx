import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./home"
import Janken from "./janken"
import Omikuji from "./omikuji"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="omikuji" element={<Omikuji />} />
        <Route path="janken" element={<Janken />} />
      </Routes>
    </>
  )
}

export default App
