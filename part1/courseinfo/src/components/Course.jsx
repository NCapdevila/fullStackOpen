import Header from "./Header"
import Content from "./Content"

const Course = ({course}) => {
    return(
        <>
        {course.map(curso => 
          <div key={curso.id}>
          <Header  text ={curso.name} />
          <Content  content={curso.parts} />
          </div>
        )}
          
          
        </>
    )
}

export default Course 