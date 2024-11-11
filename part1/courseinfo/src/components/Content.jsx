import Part from './Part'
const Content = ({content}) =>{
    const total = content.reduce((acomulador, content)=>{
        return acomulador + content.exercises 
    },0)

    return(
        <>
            {content.map(note =>
                <Part key={note.id} part={note} />
            )}
        <p><strong>total of {total} exercises</strong></p>
        </>
    )
}

export default Content