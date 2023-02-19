import { useEffect, useState } from "react"
import weatherJson from "../static/static.json"

const Weather = () => {
  const [geoLocation, setGeoLocation] = useState({
    latitude: undefined,
    longitude: undefined,
  })
  const [address, setAdress] = useState<any>()
  const [weather, setWeather] = useState<any>()

  const success = async (position: any) => {
    const { latitude, longitude } = position.coords
    const resp = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
      {
        method: "GET",
      },
    )
    const result = (await resp.json()).display_name
    const weatherInfo = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FTokyo`,
    ).then((res) => res.json())
    setGeoLocation({ latitude, longitude })
    setAdress(result)
    const idx: string = weatherInfo.daily.weathercode[0]
    setWeather(weatherJson[idx])
  }
  const fail = (error: any) => console.log(error)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, fail)
  }, [])

  return (
    <>
      <p>天気予報サイト</p>
      <p>緯度：{geoLocation.latitude}</p>
      <p>経度：{geoLocation.longitude}</p>
      <p>住所：{address}</p>
      <p>今日の天気は：{weather}</p>
    </>
  )
}

export default Weather
