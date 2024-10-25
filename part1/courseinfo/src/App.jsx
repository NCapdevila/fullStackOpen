const Header = (props) => {
  return(
    <>
      <p>{props.course}</p>
    </>
  )
}
const Content = (props) => {
  return(
    <>
      <Part partN={props.part1} exercisesN={props.exercises1} />
      <Part partN={props.part2} exercisesN={props.exercises2} />
      <Part partN={props.part3} exercisesN={props.exercises3} />
    </>
  )
}

const Part = (props) => {
  return(
    <>
      <p>{props.partN} {props.exercisesN}</p>
    </>
  )
}

const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14

  return (
    <>
      <h1>
        <Header course={course} />
      </h1>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </>
  )
}

export default App
