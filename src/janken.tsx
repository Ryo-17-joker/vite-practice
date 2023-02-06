import { Link } from "react-router-dom"

const Janken = () => {

  return (
    <>
      <h1>ジャンケンアプリ</h1>
      <ul>
        <li>
          <Link to="/">ホーム画面</Link>
        </li>
        <li>
          <Link to="/omikuji">おみくじ</Link>
        </li>
      </ul>
    </>
  )
}

export default Janken
