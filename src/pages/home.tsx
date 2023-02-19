import { Link } from "react-router-dom"

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
        <li>
          <Link to="/bookCreate">本の画面</Link>
        </li>
        <li>
          <Link to="/weather">天気予報</Link>
        </li>
      </ul>
    </>
  )
}

export default Home
