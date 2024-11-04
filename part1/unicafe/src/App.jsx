import { useState } from 'react'

const Title = ({text1}) => <h1>{text1}</h1>

const Button = ({event, text}) =>{
  return(
    <button onClick={event}>{text}</button>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  const handlerGood = () => setGood(good + 1)
  const handlerNeutral = () => setNeutral(neutral + 1)
  const handlerBad = () => setBad(bad + 1)
    
  
 // const [neutral, setNeutral] = useState(0)
 // const [bad, setBad] = useState(0)

    return(
      <>
        <Title text1='give feedback' />
        <Button event={handlerGood} text='good' /> 
        <Button event={handlerNeutral} text='neutral' /> 
        <Button event={handlerBad} text='bad' /> 
        <Title text1='statistics' />
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </>
  )
}

export default App
