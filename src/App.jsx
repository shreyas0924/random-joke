import { useEffect, useState } from 'react'
import './app.css'
function App() {

  const [joke , setJoke] = useState('')
  const url = `https://icanhazdadjoke.com/`;
  async function getJoke() {
    const jokeData = await fetch(url , {
      headers: {
        'Accept' : 'application/json'
      }
    })   
    const jokeObj = await jokeData.json();
    setJoke(jokeObj.joke)

  }
  
  
  useEffect(() => {
    getJoke();
  }, [])

  return (
    <div className='container'>
      <div className='joke'>
        {joke}
      </div>
      <button 
        className='jokebtn' 
        onClick={getJoke}
      >
        Get Joke
      </button>
    </div>
    
  )
}

export default App
