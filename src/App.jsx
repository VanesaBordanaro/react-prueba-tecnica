import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

function App() {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const firstWord = fact.split(' ')[0]
        setImageUrl(`${CAT_PREFIX_IMAGE_URL}${firstWord}`)
      })
  }, [])

  return (
    <>
      <main>
        <h1>App de Gatitos</h1>
        <p>{fact}</p>
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first word for ${fact}`}/>}
      </main>
    </>
  )
}

export default App
