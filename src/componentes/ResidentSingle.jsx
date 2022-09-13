import { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'

const ResidentSingle = ({ url }) => {

  const [resident, setResident] = useState({})
  const [emojiHappy, setEmojiHappy] = useState(<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-happy" width={"24"} height="24" viewBox="0 0 24 24" strokeWidth={"1.5"} stroke="#00b341" fill="none" strokeLinecap='round' strokeLinejoin='round'>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="9" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
    <path d="M8 13a4 4 0 1 0 8 0m0 0h-8" />
  </svg>)
  const [emojiDead, setEmojiDead] = useState(<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-sad" width={"24"} height="24" viewBox="0 0 24 24" strokeWidth={"1.5"} stroke="#FF0000" fill="none" strokeLinecap='round' strokeLinejoin='round'>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="9" />
    <line x1="9" y1="10" x2="9.01" y2="10" />
    <line x1="15" y1="10" x2="15.01" y2="10" />
    <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
  </svg>)

  useEffect(() => {
    axios.get(`${url}`)
      .then(res => setResident(res.data))
  }, []);



  return (

    <div className='card-resident'>
      <div className='card-first'>
        <h1>{resident.name}</h1>
        <img src={resident.image} alt="" className='img-resident' />
      </div>
      <div className='card-second'>
        <p><b>Estado:</b>{resident.status}<span>{resident.status === "Alive" ? emojiHappy : emojiDead}</span></p>
        <p><b>Origen:</b>{resident.origin?.name}</p>
        <p><b>Episodios donde aparece:</b>{resident.episode?.length}</p>

      </div>

    </div>

  );
}

export default ResidentSingle;