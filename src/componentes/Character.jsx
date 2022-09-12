import { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'
import ResidentSingle from './ResidentSingle'
const Character = ({ url }) => {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    if (url) {
      axios.get(url)
        .then(res => setCharacters(res.data.residents))
    }
  }, [url]);

  return (
    <>
      <div className='resident-grid'>
        {
          characters.map(users => (
            <>
              <ResidentSingle url={users} key={users} />
            </>
          ))
        }
      </div>

    </>
  );
}

export default Character;