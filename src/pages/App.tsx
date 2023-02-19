import { Route, Routes } from "react-router-dom"
import "../styles/App.css"
import BookCreate from "./bookCreate"
import Home from "./home"
import Janken from "./janken"
import Omikuji from "./omikuji"
import Weather from "./weather"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="omikuji" element={<Omikuji />} />
        <Route path="janken" element={<Janken />} />
        <Route path="bookCreate" element={<BookCreate />} />
        <Route path="weather" element={<Weather />} />
      </Routes>
    </>
  )
}

export default App
