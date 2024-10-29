const Header = ({course}) => {
  
  return(
    <>
      <p>{course}</p>
    </>
  )
}
const Content = ({parts}) => {
  
  
  return(
    <>
      <Part partN={parts[0].name} exercisesN={parts[0].exercises} />
      <Part partN={parts[1].name} exercisesN={parts[1].exercises} />
      <Part partN={parts[2].name} exercisesN={parts[2].exercises} />
     
    </>
  )
}

const Part = ({partN, exercisesN}) => {

  return(
    <>
      <p> {partN} {exercisesN}</p>
    </>
  )
}

const Total = ({exercises1, exercises2, exercises3}) => {
  
  return(
    <>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
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
