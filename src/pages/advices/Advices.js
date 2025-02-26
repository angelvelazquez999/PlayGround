import React from 'react'
import { useState } from 'react'
const Advices = () => {
    const [advice, setAdvice] = useState([])

    const fetchAdvice = async () => {
        try {
            const response = await fetch(`https://api.adviceslip.com/advice`)
            const data = await response.json()
            setAdvice(data.slip.advice)
        } catch(error){
            console.error(error)
        }
    }

  return (
    <div>
      <p>{advice ? advice : 'Da Click'}</p>
      <button onClick={fetchAdvice}> Aquí</button>
    </div>
  )
}

export default Advices
