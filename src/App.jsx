import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import Character from './componentes/Character'

function App() {
  const [location, setLocation] = useState({})
  const [text, setText] = useState("")
  const [url, setUrl] = useState("")

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 126) + 1
    setUrl(`https://rickandmortyapi.com/api/location/${randomNumber}`);
    axios.get(`https://rickandmortyapi.com/api/location/${randomNumber}`)
      .then(res => setLocation(res.data))

  }, []);

  const searchInput = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${text}`)
      .then(res => setLocation(res.data))

    setUrl(`https://rickandmortyapi.com/api/location/${text}`)

  }
  
  // document.body.style.background = "rgb(42,29,8) linear-gradient(0deg, rgba(42,29,8,1) 0%, rgba(93,69,32,1) 100%);";

  return (
    <>
      <div className='App'>
        <div className='Banner'></div>
        <h1 id='Tittle'>Rick and Morty dimensions</h1>
        <div className='Search'>

          <input type="text" placeholder="Put ID dimension" value={text} onChange={e => setText(e.target.value)} className="input" />
          <button onClick={searchInput} className="btn">Search</button>

        </div>
        <div className='Info-dimension'>
          <p><span className='prop'>Nombre:</span>{location.name}</p>
          <p><span className='prop'>Tipo:</span>{location.type}</p>
          <p><span className='prop'>Dimension:</span> {location.dimension}</p>
          <p><span className='prop'>Residentes:</span> {location.residents?.length}</p>

        </div>
      </div>
      <Character url={url} />
    </>
  )
}

export default App
