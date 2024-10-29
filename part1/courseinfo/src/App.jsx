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
      <Part partN={props.parts[0].name} exercisesN={props.parts[0].exercises} />
      <Part partN={props.parts[1].name} exercisesN={props.parts[1].exercises} />
      <Part partN={props.parts[2].name} exercisesN={props.parts[2].exercises} />
     
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
  const course = {
    name: 'Half Stack application development',
    parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of component',
    exercises: 14
  }
  ]
}

  return (
    <>
      <h1>
        <Header course={course.name} />
      </h1>
      <Content parts={course.parts} />
      <Total exercises1 ={course.parts[0].exercises} exercises2 ={course.parts[1].exercises} exercises3 ={course.parts[2].exercises} />
    </>
  )
}

export default App
