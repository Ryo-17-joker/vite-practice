import { useState } from "react"
import { Link } from "react-router-dom"
import React from "react"

const resultSheet = [
  ["Draw", "Win", "Lose"],
  ["Lose", "Draw", "Win"],
  ["Win", "Lose", "Draw"],
]
const jankenHands = ["グー", "チョキ", "パー"]
type JankenResult = {
  userHand: string
  computerHand: string
  results: string[]
}

const Janken = () => {
  const [jankenResult, setJankenResult] = useState<JankenResult>({
    userHand: "未実施",
    computerHand: "未実施",
    results: [],
  })
  const playJanken = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    const userHand = Number(event.currentTarget.value)
    const computerHand: number = Math.floor(Math.random() * 3)
    const result: string = resultSheet[userHand][computerHand]
    setJankenResult({
      userHand: jankenHands[userHand],
      computerHand: jankenHands[computerHand],
      results: [...jankenResult.results, result],
    })
  }

  return (
    <>
      <h1>ジャンケンアプリ</h1>
      <button onClick={playJanken} value={0}>
        グー
      </button>
      <button onClick={playJanken} value={1}>
        チョキ
      </button>
      <button onClick={playJanken} value={2}>
        パー
      </button>
      <p>出した手{jankenResult.userHand}</p>
      <p>相手の手{jankenResult.computerHand}</p>
      <p>結果一覧</p>
      {jankenResult.results.map((idx, value) => {
        return <p key={idx}>{value}</p>
      })}
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
