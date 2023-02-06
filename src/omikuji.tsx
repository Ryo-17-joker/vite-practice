import { Link } from "react-router-dom"

const Omikuji = () => {

  return (
    <>
      <h1>おみくじアプリ</h1>
      <ul>
        <li>
          <Link to="/">ホーム画面</Link>
        </li>
        <li>
          <Link to="/janken">じゃんけん</Link>
        </li>
      </ul>
    </>
  )
}

export default Omikuji
