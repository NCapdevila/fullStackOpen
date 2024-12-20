
import Course from "./components/Course"

function App() {

  const course = [ 
  { 
    name: 'Half Stack application development',
    id:1,
    parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id:1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id:2
    },
    {
      name: 'State of component',
      exercises: 14,
      id:3
    },
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
  ]



  return (
    <>  
      <Course course={course}/>
    </>
  )
}

export default App
