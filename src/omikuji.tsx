import { useState } from "react"
import { Link } from "react-router-dom"

const omikujiResultList: string[] = [
  '大吉', '吉', '中吉', '小吉', '凶' 
]

const Omikuji = () => {
  const [ omikujiResult, setOmikujiResult ] = useState<string>('？')
  const getOmikujiResult = (): void => {
    const result = omikujiResultList[Math.floor(Math.random() * 5)]
    setOmikujiResult(result)
  }

  return (
    <>
      <h1>おみくじアプリ</h1>
      <button onClick={getOmikujiResult}>おみくじを引く</button>
      <p>結果</p>
      <p>{omikujiResult}</p>
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
