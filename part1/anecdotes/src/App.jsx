import { useState } from 'react'


function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const handlerSelected = () => {
    const min = Math.ceil(0)
    const max = Math.floor(anecdotes.length)
    return(
      setSelected(Math.floor(Math.random() * (max - min) + min))
      
    )
  }
  const handlerPoint = () =>{
    const newPoint = [...points]
    newPoint[selected] += 1
    setPoints(newPoint)
  }
 
  const maxValue = Math.max(...points)
  const indexSelected = points.indexOf(maxValue)


  

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <p>has {points[selected]} votes</p>
      <button onClick={handlerPoint}>vote</button>
      <button onClick={handlerSelected}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <div>
        {points.some(p => p > 0) ? (
          anecdotes[indexSelected]
        ) : (
          <p>There is no vote</p>
        )}
      </div>
    </>
  )
}

export default App
