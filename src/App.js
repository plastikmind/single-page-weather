import React, { useState } from "react";
import axios from "axios"

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=10155cfc80fdc3409d8f020d26793c6a&units=metric`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className="relative bg-cloud text-white min-h-screen bg-no-repeat bg-cover bg-center">
      <div className="text-center pt-20">
        <input value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder="Search a City" type="text" className="rounded-full py-3 px-6 text-white bg-white bg-opacity-20"></input>
      </div>
      <div className="min-h-screen relative flex flex-col justify-between">
        <div className="top pt-20 items-center justify-center flex flex-col">
          <div className="location">
            <p className="text-2xl">{data.name}</p>
          </div>
          <div>
            {data.main ? <h1 className="text-8xl font-bold">{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div>
            {data.main ? <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} className="h-20"></img> : null}
          </div>
          <div>
            {data.main ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom  flex text-[21px] text-center justify-evenly">
            <div>
              {data.main ? <p className="font-bold">{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div>
              {data.main ? <p className="font-bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div>
              {data.main ? <p className="font-bold">{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>}
          <footer className="flex h-24 pb-40 text-white items-center justify-center">
        <a
          className="flex items-center justify-center gap-2"
          href="https://plastikminds.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built with ❤️ by<span className='text-xl font-semibold bg-gradient-to-r text-transparent bg-clip-text from-[#3F84E5] via-[#f0e2e7] to-[#B20D30]'>Plastik</span>
          
        </a>
      </footer>
      </div>
    </div>
  );
}

export default App;
