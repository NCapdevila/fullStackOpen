import { useState } from 'react'

const Title = ({text1}) => <h1>{text1}</h1>

const Button = ({event, text}) =>{
  return(
    <button onClick={event}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) =>{

  if (good === 0 && neutral === 0 && bad === 0){
    return(
      <p>No feedback given</p>
    )
  }

  const total = good + neutral + bad
  const positive = (good / total) * 100
  const average = (good - bad) / (good + bad + neutral)

  
  
  return(
    <>
    <StaticLine text='good' value={good} />
    <StaticLine text='neutral' value={neutral} />
    <StaticLine text='bad' value={bad} />
    <StaticLine text='avarege' value={average} />
    <StaticLine text='positive' value={positive} />

    </>
  )
}
const StaticLine = ({text, value}) =>{
  return(
    <p>{text} {value}</p>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad,setBad] = useState(0)

  const handlerGood = () => setGood(good + 1)
  const handlerNeutral = () => setNeutral(neutral + 1)
  const handlerBad = () => setBad(bad + 1)

    return(
      <>
        <Title text1='give feedback' />
        <Button event={handlerGood} text='good' /> 
        <Button event={handlerNeutral} text='neutral' /> 
        <Button event={handlerBad} text='bad' /> 
        <Title text1='statistics' />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </>
  )
}

export default App
