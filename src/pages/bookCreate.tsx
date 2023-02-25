import { useState } from "react"
import { useFetchData } from "../hooks/useFetchData"

type VolumeInfo = {
  title: string
  publisher: string
  publishedDate: string
  infoLink: string
}

type Books = {
  etag: string
  id: string
  kind: string
  volumeInfo: VolumeInfo
}

export const BookCreate = () => {
  const [selectedBookTitle, setSelectedBookTitle] = useState<string>()
  const [books, setBooks] = useState<Books[]>()

  const getBooks = async (keyword: string) => {
    const url = "https://www.googleapis.com/books/v1/volumes?q=intitle:"
    const resp = await fetch(`${url}${keyword}`, {
      method: "GET",
    })
    if (!resp.ok) {
      return new Error("データの取得に失敗しました。再度実行してください。")
    }
    const result = (await resp.json()).items
    console.log(result)
    setBooks(result ?? [])
  }
  // const getBooks = async (keyword: string) => {
  //   const url = "https://www.googleapis.com/books/v1/volumes?q=intitle:"
  //   const resp = await useFetchData(`${url}${keyword}`)
  //   return resp
  // }

  const selectBook = (book: Books) => {
    setSelectedBookTitle(book.volumeInfo.title)
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>読んだ本</td>
            <td>{selectedBookTitle}</td>
          </tr>
        </tbody>
      </table>
      <p>キーワードで検索する</p>
      <input type="text" onChange={(e) => getBooks(e.target.value)} />
      <table>
        <thead>
          <tr>
            <th></th>
            <th>書籍名</th>
            <th>出版社</th>
            <th>出版年</th>
            <th>リンク</th>
          </tr>
        </thead>
        <tbody>
          {books ? (
            books.map((book, idx) => {
              return (
                <tr key={idx}>
                  <td>
                    <button type="button" onClick={() => selectBook(book)}>
                      選択
                    </button>
                  </td>
                  <td>{book.volumeInfo.title}</td>
                  <td>{book.volumeInfo.publisher}</td>
                  <td>{book.volumeInfo.publishedDate}</td>
                  <td>
                    <a
                      href={book.volumeInfo.infoLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Link
                    </a>
                  </td>
                </tr>
              )
            })
          ) : (
            <p>データ無し</p>
          )}
        </tbody>
      </table>
    </>
  )
}

export default BookCreate
