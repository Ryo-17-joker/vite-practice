import { Link, Route, Routes } from "react-router-dom"
import Janken from "./janken"
import Omikuji from "./omikuji"

const Home = () => {

  return (
    <>
      <h1>ホーム画面</h1>
      <ul>
        <li>
          <Link to="/omikuji">おみくじ</Link>
        </li>
        <li>
          <Link to="/janken">じゃんけん</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
