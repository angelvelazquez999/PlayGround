import React from 'react'
import { useState } from 'react'

const Numbers = () => {
    const [number, setNumber] = useState('')
    const [fact, setFact] = useState('')

    const changeNumber = newNumber => {
        setNumber(newNumber)
    }

    const numberFetch = async () => {
        const response = await fetch(`http://numbersapi.com/${number}`)
        const data = await response.text()
        setFact(data)
    }

  return (
    <div>
      <input onChange={e => changeNumber(e.target.value)} />
      <button onClick={numberFetch}>Enviar</button>
      <p>Fact: {fact}</p>
    </div>
  )
}

export default Numbers
