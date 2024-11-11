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
        <p>Total: {total}</p>
        </>
    )
}

export default Content