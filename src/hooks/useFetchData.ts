import { useState } from "react"


export const useFetchData = async (url: string): Promise<undefined | Error> => {
  const [data, setData] = useState()
  const resp = await fetch(`${url}`, {
    method: "GET"
  })
  if (!resp.ok) {
    return new Error("データの取得に失敗しました。再度実行してください。")
  }
  const result = await resp.json()
  setData(result ?? [])
  return data
}

